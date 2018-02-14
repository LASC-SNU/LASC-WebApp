const express = require('express');
const app = express();
const firebase = require('firebase');
const bodyParser = require('body-parser');
const config = require('./public/js/config.js');
const path = require('path');

app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

config.initialize();

app.get('/',function(req,res){
  if(config.getUser()){
  console.log("1");
  res.redirect('http://localhost:8080/dashboard');
  }
  else{
    res.sendFile(path.join(__dirname + '/public/index.html'));
    console.log("2");
  }
});

app.get('/dashboard',function(req,res){
  res.sendFile(path.join(__dirname + '/public/dashboard.html'));
});

app.post('/',function(req,res){
  var id_token = req.body.id;
  var credential = firebase.auth.GoogleAuthProvider.credential(id_token);
  firebase.auth().signInWithCredential(credential).then(function(newUser){
    console.log(config.getUser())
  }).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });
  res.json({redirect : '/dashboard'});
});

app.listen(8080,function(){
  console.log("Listening to port 8080");
});
