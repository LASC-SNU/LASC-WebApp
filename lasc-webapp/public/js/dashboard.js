$(document).ready(function(){
  $.post('http://localhost:8080/public/dashboard',{},function(data){
    console.log(data.user.displayName);
    $("#userName").text(data.user.displayName);
    $("#userNameh3").text(data.user.displayName);
    $("#userProfileImage").attr("src",data.user.photoURL);
  })
})
