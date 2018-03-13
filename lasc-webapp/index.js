const express = require('express');
const app = express();
const firebase = require('firebase');
const bodyParser = require('body-parser');
const config = require('./public/js/config.js');
const path = require('path');

var user = null;

app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

config.initialize();

app.get('/public/login',function(req,res){
  if(config.getUser()){
  console.log("1");
  res.redirect('http://localhost:8080/dashboard');
  }
  else{
    res.sendFile(path.join(__dirname + '/public/login.html'));
    console.log("2");
  }
});

app.get('/public/dashboard',function(req,res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/public/dashboard',function(req,res){
  var currentUser = user;
  res.json({user : currentUser});
});

app.get('/public/classes',function(req,res){
  res.sendFile(path.join(__dirname + '/public/map-google.html'));
});

app.post('/public/updateInfo',function(req,res){
  console.log(req.body.Name);
  firebase.database().ref('/users/' + req.body.user.uid + '/data/').set({
    Name : req.body.Name,
    Email : req.body.Email,
    RollNo : req.body.RollNo,
  //  Department : req.body.Department
  });
  res.json({redirect : '/public/classes'});
});

app.post('/public/login',function(req,res){
  var id_token = req.body.id;
  var credential = firebase.auth.GoogleAuthProvider.credential(id_token);
  firebase.auth().signInWithCredential(credential).then(function(newUser){
    user = config.getUser();
    console.log(user);
    res.json({redirect : '/public/dashboard',user : firebase.auth().currentUser});
  }).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });
});

app.listen(8080,function(){
  console.log("Listening to port 8080");
});
