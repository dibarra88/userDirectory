
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const data = require('./data');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static('static'));

app.get("/", function(req, res, next){
  res.render("index", data);
})

//user
app.get("/user/:username", function(req, res, next){
    const user = data.users.filter(function(person){            //find the user
        return person.username === req.params.username;
    })[0]

    res.render("user", user);
})

app.listen(3000, function(){
    console.log("App is listening on port 3000");
})

//console.log(data.users);