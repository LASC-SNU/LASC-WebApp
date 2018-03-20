$(document).ready(function(){
  $.post('/public/dashboard',{},function(data){
    if(data.user != null){
      display(data);
      var classesData = firebase.database().ref('/users/' + data.user.uid + '/classes/').once('value',function(snapshot){
        if(snapshot.exists()){
          var subjectData = snapshot.val();
          $(".ced101").hide();
          $(".med209").hide();
          $(".csd101").hide();
          $(".eed102").hide();
          $(".csd201").hide();
          $(".eed208").hide();
          $(".eed204").hide();
          $(".mat104").hide();
          $(".phy102").hide();
          $(".csd204").hide();
          $(".eed205").hide();
          if(subjectData.CED101){
            init(".ced101","#ced101AttePercentage","#ced101ProgressBar",subjectData.CED101.Attendance);
            $("#ced101AtteMark").on('click',function(){
              markAttendance('/users/' + data.user.uid + '/classes/CED101',subjectData.CED101.Attendance + 1,"#ced101AtteMark");
              init(".ced101","#ced101AttePercentage","#ced101ProgressBar",subjectData.CED101.Attendance + 1);
            });
          }
          if(subjectData.MED209){
            init(".med209","#med209AttePercentage","#med209ProgressBar",subjectData.MED209.Attendance);
            $("#med209AtteMark").on('click',function(){
              markAttendance('/users/' + data.user.uid + '/classes/MED209',subjectData.MED209.Attendance + 1,"#med209AtteMark");
              init(".med209","#med209AttePercentage","#med209ProgressBar",subjectData.MED209.Attendance + 1);
            });
          }
          if(subjectData.CSD101){
            init(".csd101","#csd101AttePercentage","#csd101ProgressBar",subjectData.CSD101.Attendance);
            $("#csd101AtteMark").on('click',function(){
              markAttendance('/users/' + data.user.uid + '/classes/CSD101',subjectData.CSD101.Attendance + 1,"#csd101AtteMark");
              init(".csd101","#csd101AttePercentage","#csd101ProgressBar",subjectData.CSD101.Attendance + 1);
            });
          }
          if(subjectData.EED102){
            init(".eed102","#eed102AttePercentage","#eed102ProgressBar",subjectData.EED102.Attendance);
            $("#eed102AtteMark").on('click',function(){
              markAttendance('/users/' + data.user.uid + '/classes/EED102',subjectData.EED102.Attendance + 1,"#eed102AtteMark");
              init(".eed102","#eed102AttePercentage","#eed102ProgressBar",subjectData.EED102.Attendance + 1);
            });
          }
          if(subjectData.CSD201){
            init(".csd201","#ced101AttePercentage","#csd201ProgressBar",subjectData.CSD201.Attendance);
            $("#csd201AtteMark").on('click',function(){
              markAttendance('/users/' + data.user.uid + '/classes/CSD201',subjectData.CSD201.Attendance + 1,"#csd201AtteMark");
              init(".csd201","#ced101AttePercentage","#csd201ProgressBar",subjectData.CSD201.Attendance + 1);
            });
          }
          if(subjectData.EED208){
            init(".eed208","#eed208AttePercentage","#eed208ProgressBar",subjectData.EED208.Attendance);
            $("#eed208AtteMark").on('click',function(){
              markAttendance('/users/' + data.user.uid + '/classes/EED208',subjectData.EED208.Attendance + 1,"#eed208AtteMark");
              init(".eed208","#eed208AttePercentage","#eed208ProgressBar",subjectData.EED208.Attendance + 1);
            });
          }
          if(subjectData.EED204){
            init(".eed204","#eed204AttePercentage","#eed204ProgressBar",subjectData.EED204.Attendance);
            $("#eed204AtteMark").on('click',function(){
              markAttendance('/users/' + data.user.uid + '/classes/EED204',subjectData.EED204.Attendance + 1,"#eed204AtteMark");
              init(".eed204","#eed204AttePercentage","#eed204ProgressBar",subjectData.EED204.Attendance + 1);
            });
          }
          if(subjectData.MAT104){
            init(".mat104","#mat104AttePercentage","#mat104ProgressBar",subjectData.MAT104.Attendance);
            $("#mat104AtteMark").on('click',function(){
              markAttendance('/users/' + data.user.uid + '/classes/MAT104',subjectData.MAT104.Attendance + 1,"#mat104AtteMark");
              init(".mat104","#mat104AttePercentage","#mat104ProgressBar",subjectData.MAT104.Attendance + 1);
            });
          }
          if(subjectData.PHY102){
            init(".phy102","#phy102AttePercentage","#phy102ProgressBar",subjectData.PHY102.Attendance);
            $("#phy102AtteMark").on('click',function(){
              markAttendance('/users/' + data.user.uid + '/classes/PHY102',subjectData.PHY102.Attendance + 1,"#phy102AtteMark");
              init(".phy102","#phy102AttePercentage","#phy102ProgressBar",subjectData.PHY102.Attendance + 1);
            });
          }
          if(subjectData.CSD204){
            init(".csd204","#csd204AttePercentage","#csd204ProgressBar",subjectData.CSD204.Attendance);
            $("#csd204AtteMark").on('click',function(){
              markAttendance('/users/' + data.user.uid + '/classes/CSD204',subjectData.CSD204.Attendance + 1,"#csd204AtteMark");
              init(".csd204","#csd204AttePercentage","#csd204ProgressBar",subjectData.CSD204.Attendance + 1);
            });
          }
          if(subjectData.EED205){
            init(".eed205","#eed205AttePercentage","#eed205ProgressBar",subjectData.EED205.Attendance);
            $("#eed205AtteMark").on('click',function(){
              markAttendance('/users/' + data.user.uid + '/classes/EED205',subjectData.EED205.Attendance + 1,"#eed205AtteMark");
              init(".eed205","#eed205AttePercentage","#eed205ProgressBar",subjectData.EED205.Attendance + 1);
            });
          }
        }
      });
    }
    else{
      window.location = '/public/login';
    }
  });
  $("#logoutButton").on('click',function(){
    $.get("/public/logout",function(data){
      window.location = data.redirect;
    })
  });
})

function display(data){
  $("#userName").text(data.user.displayName);
  $("#userNameh3").text(data.user.displayName);
  $(".userProfileImage").attr("src",data.user.photoURL);
}

function markAttendance(classURL,attendanceValue,subjectAtteMark){
  firebase.database().ref(classURL).set({
    Attendance : attendanceValue
  });
  $(subjectAtteMark).html("Attendance Marked");
  $(subjectAtteMark).removeAttr("href");
}

function init(subjectClass,subjectAttePer,subjectProgressBar,attendanceValue){
  $(subjectClass).show();
  $(subjectAttePer).html(attendanceValue);
  $(subjectProgressBar).css({'width' : attendanceValue});
}
