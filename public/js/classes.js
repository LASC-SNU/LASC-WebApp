$(document).ready(function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            $(".userProfileImage").attr("src", user.photoURL);
            $("#userName").text(user.displayName);
            var dataPresent = 0;
            $("#ced101").removeAttr("href");
            $("#ced101").css({ 'color': 'white' });

            $("#med209").removeAttr("href");
            $("#med209").css({ 'color': 'white' });

            $("#csd101").removeAttr("href");
            $("#csd101").css({ 'color': 'white' });

            $("#csd201").removeAttr("href");
            $("#csd201").css({ 'color': 'white' });

            $("#eed102").removeAttr("href");
            $("#eed102").css({ 'color': 'white' });

            $("#csd204").removeAttr("href");
            $("#csd204").css({ 'color': 'white' });

            $("#eed205").removeAttr("href");
            $("#eed205").css({ 'color': 'white' });

            $("#mat104").removeAttr("href");
            $("#mat104").css({ 'color': 'white' });

            $("#phy102").removeAttr("href");
            $("#phy102").css({ 'color': 'white' });

            $("#eed204").removeAttr("href");
            $("#eed204").css({ 'color': 'white' });

            $("#eed207").removeAttr("href");
            $("#eed207").css({ 'color': 'white' });

            var userData = firebase.database().ref('/users/' + user.uid + '/data').once('value', function(snapshot) {
                if (snapshot.exists()) {
                    dataPresent = 1;
                    $("#ced101").attr("href", "");
                    $("#med209").attr("href", "");
                    $("#csd101").attr("href", "");
                    $("#csd201").attr("href", "");
                    $("#eed102").attr("href", "");
                    $("#csd204").attr("href", "");
                    $("#eed205").attr("href", "");
                    $("#mat104").attr("href", "");
                    $("#phy102").attr("href", "");
                    $("#eed204").attr("href", "");
                    $("#eed207").attr("href", "");
                    var userData = snapshot.val();
                    $("#userRollNo").val(userData.RollNo);
                    $("#userStream").val(userData.Department);
                    var classesData = firebase.database().ref('/users/' + user.uid + '/classes/').once('value', function(classes) {
                        if (classes.exists()) {
                            var classData = classes.val();
                            if (classData.CED101) {
                                $("#ced101").html("Class Added");
                                $("#ced101").removeAttr("href");
                                $("#ced101").css({ 'color': 'white' });
                            }
                            if (classData.MED209) {
                                $("#med209").html("Class Added");
                                $("#med209").removeAttr("href");
                                $("#med209").css({ 'color': 'white' });

                            }
                            if (classData.CSD101) {
                                $("#csd101").html("Class Added");
                                $("#csd101").removeAttr("href");
                                $("#csd101").css({ 'color': 'white' });

                            }
                            if (classData.EED102) {
                                $("#eed102").html("Class Added");
                                $("#eed102").removeAttr("href");
                                $("#eed102").css({ 'color': 'white' });

                            }
                            if (classData.CSD201) {
                                $("#csd201").html("Class Added");
                                $("#csd201").removeAttr("href");
                                $("#csd201").css({ 'color': 'white' });

                            }
                            if (classData.EED207) {
                                $("#eed207").html("Class Added");
                                $("#eed207").removeAttr("href");
                                $("#eed207").css({ 'color': 'white' });

                            }
                            if (classData.EED204) {
                                $("#eed204").html("Class Added");
                                $("#eed204").removeAttr("href");
                                $("#eed204").css({ 'color': 'white' });

                            }
                            if (classData.MAT104) {
                                $("#mat104").html("Class Added");
                                $("#mat104").removeAttr("href");
                                $("#mat104").css({ 'color': 'white' });

                            }
                            if (classData.PHY102) {
                                $("#phy102").html("Class Added");
                                $("#phy102").removeAttr("href");
                                $("#phy102").css({ 'color': 'white' });

                            }
                            if (classData.CSD204) {
                                $("#csd204").html("Class Added");
                                $("#csd204").removeAttr("href");
                                $("#csd204").css({ 'color': 'white' });

                            }
                            if (classData.EED205) {
                                $("#eed205").html("Class Added");
                                $("#eed205").removeAttr("href");
                                $("#eed205").css({ 'color': 'white' });

                            }
                        }
                    });
                    $("#ced101").on('click', function() {
                        var classesRef = firebase.database().ref('/users/' + user.uid + '/classes/')
                        var subjectRef = classesRef.child("CED101");
                        checkSubject(subjectRef);
                        $("#ced101").html("Class Added");
                        $("#ced101").removeAttr("href");
                        $("#ced101").css({ 'color': 'white' });

                    });
                    $("#med209").on('click', function() {
                        var classesRef = firebase.database().ref('/users/' + user.uid + '/classes/')
                        var subjectRef = classesRef.child("MED209");
                        checkSubject(subjectRef);
                        $("#med209").html("Class Added");
                        $("#med209").removeAttr("href");
                        $("#med209").css({ 'color': 'white' });


                    });
                    $("#csd101").on('click', function() {
                        var classesRef = firebase.database().ref('/users/' + user.uid + '/classes/')
                        var subjectRef = classesRef.child("CSD101");
                        checkSubject(subjectRef);
                        $("#csd101").html("Class Added");
                        $("#csd101").removeAttr("href");
                        $("#csd101").css({ 'color': 'white' });

                    });
                    $("#eed102").on('click', function() {
                        var classesRef = firebase.database().ref('/users/' + user.uid + '/classes/')
                        var subjectRef = classesRef.child("EED102");
                        checkSubject(subjectRef);
                        $("#eed102").html("Class Added");
                        $("#eed102").removeAttr("href");
                        $("#eed102").css({ 'color': 'white' });

                    });
                    $("#csd201").on('click', function() {
                        var classesRef = firebase.database().ref('/users/' + user.uid + '/classes/')
                        var subjectRef = classesRef.child("CSD201");
                        checkSubject(subjectRef);
                        $("#csd201").html("Class Added");
                        $("#csd201").removeAttr("href");
                        $("#csd201").css({ 'color': 'white' });

                    });
                    $("#eed207").on('click', function() {
                        var classesRef = firebase.database().ref('/users/' + user.uid + '/classes/')
                        var subjectRef = classesRef.child("EED207");
                        checkSubject(subjectRef);
                        $("#eed207").html("Class Added");
                        $("#eed207").removeAttr("href");
                        $("#eed207").css({ 'color': 'white' });

                    });
                    $("#eed204").on('click', function() {
                        var classesRef = firebase.database().ref('/users/' + user.uid + '/classes/')
                        var subjectRef = classesRef.child("EED204");
                        checkSubject(subjectRef);
                        $("#eed204").html("Class Added");
                        $("#eed204").removeAttr("href");
                        $("#eed204").css({ 'color': 'white' });

                    });
                    $("#mat104").on('click', function() {
                        var classesRef = firebase.database().ref('/users/' + user.uid + '/classes/')
                        var subjectRef = classesRef.child("MAT104");
                        checkSubject(subjectRef);
                        $("#mat104").html("Class Added");
                        $("#mat104").removeAttr("href");
                        $("#mat104").css({ 'color': 'white' });

                    });
                    $("#phy102").on('click', function() {
                        var classesRef = firebase.database().ref('/users/' + user.uid + '/classes/')
                        var subjectRef = classesRef.child("PHY102");
                        checkSubject(subjectRef);
                        $("#phy102").html("Class Added");
                        $("#phy102").removeAttr("href");
                        $("#phy102").css({ 'color': 'white' });

                    });
                    $("#csd204").on('click', function() {
                        var classesRef = firebase.database().ref('/users/' + user.uid + '/classes/')
                        var subjectRef = classesRef.child("CSD204");
                        checkSubject(subjectRef);
                        $("#csd204").html("Class Added");
                        $("#csd204").removeAttr("href");
                        $("#csd204").css({ 'color': 'white' });

                    });
                    $("#eed205").on('click', function() {
                        var classesRef = firebase.database().ref('/users/' + user.uid + '/classes/')
                        var subjectRef = classesRef.child("EED205");
                        checkSubject(subjectRef);
                        $("#eed205").html("Class Added");
                        $("#eed205").removeAttr("href");
                        $("#eed205").css({ 'color': 'white' });

                    });
                } else {
                    $("#ced101").removeAttr("href");
                    $("#med209").removeAttr("href");
                    $("#csd101").removeAttr("href");
                    $("#csd201").removeAttr("href");
                    $("#eed102").removeAttr("href");
                    $("#csd204").removeAttr("href");
                    $("#eed205").removeAttr("href");
                    $("#mat104").removeAttr("href");
                    $("#phy102").removeAttr("href");
                    $("#eed204").removeAttr("href");
                    $("#eed207").removeAttr("href");
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