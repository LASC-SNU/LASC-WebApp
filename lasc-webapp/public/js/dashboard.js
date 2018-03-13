$(document).ready(function(){
  $.post('http://localhost:8080/public/dashboard',{},function(data){
    if(data.user != null){
      display(data);
    }
    else{
      window.location = '/public/login';
    }
  });
  $("#logoutButton").on('click',function(){
    $.get("http://localhost:8080/public/logout",function(data){
      window.location = data.redirect;
    })
  });
})

function display(data){
  $("#userName").text(data.user.displayName);
  $("#userNameh3").text(data.user.displayName);
  $(".userProfileImage").attr("src",data.user.photoURL);
}
