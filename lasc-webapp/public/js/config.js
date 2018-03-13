const firebase = require('firebase');

function initialize(){
var config = {
  apiKey: "AIzaSyB-fLQYirQqjwFOoYd3rIrJMxmXt6TYxbg",
  authDomain: "lasc-webapp.firebaseapp.com",
  databaseURL: "https://lasc-webapp.firebaseio.com",
  projectId: "lasc-webapp",
  storageBucket: "lasc-webapp.appspot.com",
  messagingSenderId: "979121797718"
};
firebase.initializeApp(config);
}

function getCurrentUser(){
  return firebase.auth().currentUser;
}

function logout(){
  firebase.auth().signOut().then(function(){

  }).catch(function(error){
    console.log(error.code,error.message);
  });
}

module.exports.initialize = initialize;
module.exports.getUser = getCurrentUser;
module.exports.logout = logout;
