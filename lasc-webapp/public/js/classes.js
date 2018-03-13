$(document).ready(function(){
  $.post('http://localhost:8080/public/dashboard',{},function(data){
    if(data.user != null){
      $(".userProfileImage").attr("src",data.user.photoURL);
      $("#userName").text(data.user.displayName);
      var dataPresent = 0;
      var userData = firebase.database().ref('/users/' + data.user.uid + '/data').once('value',function(snapshot){
        if(snapshot.exists()){
          dataPresent = 1;
          var userData = snapshot.val();
          $("#userRollNo").val(userData.RollNo);
          var classesData = firebase.database().ref('/users/' + data.user.uid + '/classes/').once('value',function(classes){
            if(classes.exists()){
              var classData = classes.val();
              if(classData.CED101){
                $("#ced101").html("Class Added");
                $("#ced101").removeAttr("href");
              }
              if(classData.MED209){
                $("#med209").html("Class Added");
                $("#med209").removeAttr("href");
              }
              if(classData.CSD101){
                $("#csd101").html("Class Added");
                $("#csd101").removeAttr("href");
              }
              if(classData.EED102){
                $("#eed102").html("Class Added");
                $("#eed102").removeAttr("href");
              }
              if(classData.CSD201){
                $("#csd201").html("Class Added");
                $("#csd201").removeAttr("href");
              }
              if(classData.EED208){
                $("#eed208").html("Class Added");
                $("#eed208").removeAttr("href");
              }
              if(classData.EED204){
                $("#eed204").html("Class Added");
                $("#eed204").removeAttr("href");
              }
              if(classData.MAT104){
                $("#mat104").html("Class Added");
                $("#mat104").removeAttr("href");
              }
              if(classData.PHY102){
                $("#phy102").html("Class Added");
                $("#phy102").removeAttr("href");
              }
              if(classData.CSD204){
                $("#csd204").html("Class Added");
                $("#csd204").removeAttr("href");
              }
              if(classData.EED205){
                $("#eed205").html("Class Added");
                $("#eed205").removeAttr("href");
              }
            }
          });
          $("#ced101").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("CED101");
            checkSubject(subjectRef);
            $("#ced101").html("Class Added");
            $("#ced101").removeAttr("href");
          });
          $("#med209").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("MED209");
            checkSubject(subjectRef);
            $("#med209").html("Class Added");
            $("#med209").removeAttr("href");
          });
          $("#csd101").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("CSD101");
            checkSubject(subjectRef);
            $("#csd101").html("Class Added");
            $("#csd101").removeAttr("href");
          });
          $("#eed102").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("EED102");
            checkSubject(subjectRef);
            $("#eed102").html("Class Added");
            $("#eed102").removeAttr("href");
          });
          $("#csd201").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("CSD201");
            checkSubject(subjectRef);
            $("#csd201").html("Class Added");
            $("#csd201").removeAttr("href");
          });
          $("#eed208").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("EED208");
            checkSubject(subjectRef);
            $("#eed208").html("Class Added");
            $("#eed208").removeAttr("href");
          });
          $("#eed204").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("EED204");
            checkSubject(subjectRef);
            $("#eed204").html("Class Added");
            $("#eed204").removeAttr("href");
          });
          $("#mat104").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("MAT104");
            checkSubject(subjectRef);
            $("#mat104").html("Class Added");
            $("#mat104").removeAttr("href");
          });
          $("#phy102").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("PHY102");
            checkSubject(subjectRef);
            $("#phy102").html("Class Added");
            $("#phy102").removeAttr("href");
          });
          $("#csd204").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("CSD204");
            checkSubject(subjectRef);
            $("#csd204").html("Class Added");
            $("#csd204").removeAttr("href");
          });
          $("#eed205").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("EED205");
            checkSubject(subjectRef);
            $("#eed205").html("Class Added");
            $("#eed205").removeAttr("href");
          });
        }
          $("#editData").on('click',function(){
            dataPresent = 1;
            var rollno = $("#userRollNo").val();
            var department = 1;
            $.post('http://localhost:8080/public/updateInfo',{RollNo : rollno,Department : department,user : data.user},function(){
              $("#userRollNo").val(rollno);
            })
          });
      });
    }
    else{
      window.location = '/public/login';
    }
  });
})

function checkSubject(subjectRef){
  subjectRef.once('value',function(subject){
    if(!subject.exists()){
      subjectRef.set({Attendance : 0});
    }
  });
}
