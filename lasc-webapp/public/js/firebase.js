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
  console.log("1");
});

function onSignIn(googleUser){
  console.log('Google Auth Response',googleUser);
   var unsubscribe = firebase.auth().onAuthStateChanged(function(newUser){
     unsubscribe();
     console.log(newUser);
    if(!isUserEqual(googleUser,newUser)){
      var id_token = googleUser.getAuthResponse().id_token;
      $.post('http://localhost:8080/',{id : id_token},function(data){
        window.location = data.redirect;
      });
    }
    else {
      console.log('User already signed-in Firebase.');
      window.location = '/dashboard';
    }
  });
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
