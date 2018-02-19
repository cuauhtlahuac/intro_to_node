const express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send('Hi There any one!');
});

app.get("/r/:variable",function(req,res){
    console.log(req.params);
    res.send("patron /r/variable");
});

app.get("/r/:subredditName/comments/:id/:title/",function(req,res){
    var slash = req.params.subredditName;
    console.log(slash);
    res.send('Welcome to ' + slash.toUpperCase() + "PAGE");
});

app.get("/dog",function(req,res){
    console.log('this message will be appear in the console but not in the browser when /dog');
    res.send('MEAU 2!');
});

app.get("/bye",function(req,res){
    res.send('Goodbye!');
});

app.get("*",function(req,res){
    res.send('You are a star');
});

console.log("Server Started");


// Tell Express to Listen for request (start server) recomend use on the bottom of every app maded
app.listen(process.env.PORT,process.env.IP);