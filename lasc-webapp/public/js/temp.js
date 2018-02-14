$(document).ready(function(){
  $('#redirect').click(function(){
    $.get('http://localhost:8080/login',function(){});
  });
});
