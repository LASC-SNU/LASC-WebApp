$(document).ready(function(){
  $.post('http://localhost:8080/public/dashboard',{},function(data){
    console.log(data.user.displayName);
    $("#userName").text(data.user.displayName);
  })
})
