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

module.exports.initialize = initialize;
module.exports.getUser = getCurrentUser;
