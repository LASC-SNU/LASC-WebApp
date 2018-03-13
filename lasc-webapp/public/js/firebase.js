$(document).ready(function(){
  var config = {
    apiKey: "AIzaSyB-fLQYirQqjwFOoYd3rIrJMxmXt6TYxbg",
    authDomain: "lasc-webapp.firebaseapp.com",
    databaseURL: "https://lasc-webapp.firebaseio.com",
    projectId: "lasc-webapp",
    storageBucket: "lasc-webapp.appspot.com",
    messagingSenderId: "979121797718"
  };
  firebase.initializeApp(config);
});

function onSignIn(googleUser){
   var unsubscribe = firebase.auth().onAuthStateChanged(function(newUser){
     if(newUser){
       window.location = '/public/dashboard';
     }
     else{
       var id_token = googleUser.getAuthResponse().id_token;
       $.post('http://localhost:8080/public/login',{id : id_token},function(data){
         if(data.user){
         window.location = data.redirect;
       }
       });
     }
   });
 }

function getCurrentUser(){
  return firebase.auth().currentUser;
}

function isUserEqual(googleUser,newUser){
  if(newUser){
     var providerData = firebaseUser.providerData;
     for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID && providerData[i].uid === googleUser.getBasicProfile().getId()) {
        return true;
      }
    }
  }
  return false;
}
