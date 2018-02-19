$(document).ready(function(){
  $.post('http://localhost:8080/public/dashboard',{},function(data){
    if(data.user != null){
      $(".userProfileImage").attr("src",data.user.photoURL);
      $("#userName").text(data.user.displayName);
    }
    else{
      window.location = '/public/login';
    }
  });
})
