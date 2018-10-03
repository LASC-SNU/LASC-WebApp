$(document).ready(function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            $(".userProfileImage").attr("src", user.photoURL);
            $("#userName").text(user.displayName);
            var dataPresent = 0;
            $("#csd101").removeAttr("href");
            $("#csd101").css({ 'color': 'white' });
            $("#eco203").removeAttr("href");
            $("#eco203").css({ 'color': 'white' });
            $("#eed201").removeAttr("href");
            $("#eed201").css({ 'color': 'white' });
            $("#phy101").removeAttr("href");
            $("#phy101").css({ 'color': 'white' });
            $("#med201").removeAttr("href");
            $("#med201").css({ 'color': 'white' });

            var userData = firebase.database().ref('/users/' + user.uid + '/data').once('value', function(snapshot) {
                if (snapshot.exists()) {
                    dataPresent = 1;
                    $("#csd101").attr("href", "");
                    $("#eco203").attr("href", "");
                    $("#eed201").attr("href", "");
                    $("#phy101").attr("href", "");
                    $("#med201").attr("href", "");
                    var userData = snapshot.val();
                    $("#userRollNo").val(userData.RollNo);
                    $("#userStream").val(userData.Department);
                    var classesData = firebase.database().ref('/users/' + user.uid + '/classes/').once('value', function(classes) {
                        if (classes.exists()) {
                            var classData = classes.val();
                            if (classData.CSD101) {
                                $("#csd101").html("Class Added");
                                $("#csd101").removeAttr("href");
                                $("#csd101").css({ 'color': 'white' });

                            }
                            if (classData.ECO203) {
                                $("#eco203").html("Class Added");
                                $("#eco203").removeAttr("href");
                                $("#eco203").css({ 'color': 'white' });

                            }
                            if (classData.EED201) {
                                $("#eed201").html("Class Added");
                                $("#eed201").removeAttr("href");
                                $("#eed201").css({ 'color': 'white' });

                            }
                            if (classData.PHY101) {
                                $("#phy101").html("Class Added");
                                $("#phy101").removeAttr("href");
                                $("#phy101").css({ 'color': 'white' });

                            }
                            if (classData.MED201) {
                                $("#med201").html("Class Added");
                                $("#med201").removeAttr("href");
                                $("#med201").css({ 'color': 'white' });

                            }
                        }
                    });
                    $("#csd101").on('click', function() {
                        var classesRef = firebase.database().ref('/users/' + user.uid + '/classes/')
                        var subjectRef = classesRef.child("CSD101");
                        checkSubject(subjectRef);
                        $("#csd101").html("Class Added");
                        $("#csd101").removeAttr("href");
                        $("#csd101").css({ 'color': 'white' });

                    });
                    $("#eco203").on('click', function() {
                        var classesRef = firebase.database().ref('/users/' + user.uid + '/classes/')
                        var subjectRef = classesRef.child("ECO203");
                        checkSubject(subjectRef);
                        $("#eco203").html("Class Added");
                        $("#eco203").removeAttr("href");
                        $("#eco203").css({ 'color': 'white' });

                    });
                    $("#eed201").on('click', function() {
                        var classesRef = firebase.database().ref('/users/' + user.uid + '/classes/')
                        var subjectRef = classesRef.child("EED201");
                        checkSubject(subjectRef);
                        $("#eed201").html("Class Added");
                        $("#eed201").removeAttr("href");
                        $("#eed201").css({ 'color': 'white' });

                    });
                    $("#phy101").on('click', function() {
                        var classesRef = firebase.database().ref('/users/' + user.uid + '/classes/')
                        var subjectRef = classesRef.child("PHY101");
                        checkSubject(subjectRef);
                        $("#phy101").html("Class Added");
                        $("#phy101").removeAttr("href");
                        $("#phy101").css({ 'color': 'white' });

                    });
                    $("#med201").on('click', function() {
                        var classesRef = firebase.database().ref('/users/' + user.uid + '/classes/')
                        var subjectRef = classesRef.child("MED201");
                        checkSubject(subjectRef);
                        $("#med201").html("Class Added");
                        $("#med201").removeAttr("href");
                        $("#med201").css({ 'color': 'white' });

                    });
                } else {
                    $("#csd101").removeAttr("href");
                    $("#eco203").removeAttr("href");
                    $("#eed201").removeAttr("href");
                    $("#phy101").removeAttr("href");
                    $("#med201").removeAttr("href");
                    alert("Enter your details first");
                    window.location = "/public/classes#userRollNo"
                }
                $("#editData").on('click', function() {
                    dataPresent = 1;
                    var rollno = $("#userRollNo").val();
                    var dept = document.getElementById("userStream");
                    var department = dept.options[dept.selectedIndex].text;
                    firebase.database().ref('/users/' + user.uid + '/data/').set({
                        Name: user.displayName,
                        RollNo: rollno,
                        Email: user.email,
                        Department: department
                    });
                    window.location = "/public/classes";
                });
            });
            $("#logoutButton").on('click', function() {
                firebase.auth().signOut().then(function() {
                    window.location = "/public/login";
                });
            });
        } else {
            window.location = "/public/login";
        }
    });
})

function checkSubject(subjectRef) {
    subjectRef.once('value', function(subject) {
        if (!subject.exists()) {
            subjectRef.set({
                Attendance: 0
            });
        }
    });
}
