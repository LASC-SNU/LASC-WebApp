$(document).ready(function(){
  $.post('http://localhost:8080/public/dashboard',{},function(data){
    if(data.user != null){
      display(data);
    }
    else{
      window.location = '/public/login';
    }
  });
})

function display(data){
  $("#userName").text(data.user.displayName);
  $("#userNameh3").text(data.user.displayName);
  $(".userProfileImage").attr("src",data.user.photoURL);
}

function markAttendance(data,sub){
  var database = firebase.database();
  database.ref('user/' + data.user.uid).set({
    sub : 1
  })
}
