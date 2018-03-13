$(document).ready(function(){
  $.post('http://localhost:8080/public/dashboard',{},function(data){
    if(data.user != null){
      $(".userProfileImage").attr("src",data.user.photoURL);
      $("#userName").text(data.user.displayName);
      var dataPresent = 0;
      var userData = firebase.database().ref('/users/' + data.user.uid + '/data/').once('value',function(snapshot){
        if(snapshot.exists()){
          dataPresent = 1;
          $("#userName").val(snapshot.Name);
          $("#userEmail").val(snapshot.Email);
          $("#userRollNo").val(snapshot.RollNo);
          var classesData = firebase.database().ref('/users/' + data.user.uid + '/classes/').once('value',function(classes){
            if(classes.exists()){
              var name = classes.val();
              /*for(var i = 0;i <= name.length;i++){
                //
              }*/
            }
          });
          $("#ced101").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("CED 101");
            subjectRef.set({Attendance : 0});
            $("#ced101").html("Class Added");
            $("#ced101").removeAttr("href");
          });
          $("#med209").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("MED 209");
            subjectRef.set({Attendance : 0});
            $("#med209").html("Class Added");
            $("#med209").removeAttr("href");
          });
          $("#csd101").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("CSD 101");
            subjectRef.set({Attendance : 0});
            $("#csd101").html("Class Added");
            $("#csd101").removeAttr("href");
          });
          $("#eed102").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("EED 102");
            subjectRef.set({Attendance : 0});
            $("#eed102").html("Class Added");
            $("#eed102").removeAttr("href");
          });
          $("#csd201").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("CSD 201");
            subjectRef.set({Attendance : 0});
            $("#csd201").html("Class Added");
            $("#csd201").removeAttr("href");
          });
          $("#eed208").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("EED 208");
            subjectRef.set({Attendance : 0});
            $("#eed208").html("Class Added");
            $("#eed208").removeAttr("href");
          });
          $("#eed204").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("EED 204");
            subjectRef.set({Attendance : 0});
            $("#eed204").html("Class Added");
            $("#eed204").removeAttr("href");
          });
          $("#mat104").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("MAT 104");
            subjectRef.set({Attendance : 0});
            $("#mat104").html("Class Added");
            $("#phy102").removeAttr("href");
          });
          $("#phy102").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("PHY 102");
            subjectRef.set({Attendance : 0});
            $("#phy102").html("Class Added");
            $("#phy102").removeAttr("href");
          });
          $("#csd204").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("CSD 204");
            subjectRef.set({Attendance : 0});
            $("#csd204").html("Class Added");
            $("#cds204").removeAttr("href");
          });
          $("#eed205").on('click',function(){
            var classesRef = firebase.database().ref('/users/' + data.user.uid + '/classes/')
            var subjectRef = classesRef.child("EED 205");
            subjectRef.set({Attendance : 0});
            $("#eed205").html("Class Added");
            $("#eed205").removeAttr("href");
          });
        }
        else{
          $("#editData").on('click',function(){
            dataPresent = 1;
            var name = $("#userName").val();
            var rollno = $("#userRollNo").val();
            var email = $("#userEmail").val();
            var department = $("#userStream").value;
            $.post('http://localhost:8080/public/updateInfo',{Name : name,Email : email,RollNo : rollno,Department : department,user : data.user},function(){
              $("#userName").val(name);
              $("#userRollNo").val(rollno);
              $("#userEmail").val(email);
            })
          /*
              console.log(1);
              firebase.database().ref('/users/' + data.user.uid + '/data/').set({
                Name : name,
                Email : email,
                "Roll No." : rollno,
                Department : department
              });*/
          });
        }
      });
    }
    else{
      window.location = '/public/login';
    }
  });
})
