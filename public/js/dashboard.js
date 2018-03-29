$(document).ready(function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            display(user);
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
            var classesData = firebase.database().ref('/users/' + user.uid + '/classes/').once('value', function(snapshot) {
                if (snapshot.exists()) {
                    var subjectClass;
                    var subject = firebase.database().ref('/subject/').once('value', function(subjectSnapshot) {
                        if (subjectSnapshot.exists()) {
                            subjectClass = subjectSnapshot.val();
                            var date = new Date();
                            var subjectData = snapshot.val();
                            if (subjectData.CED101) {
                                init(".ced101", "#ced101AttePercentage", "#ced101ProgressBar", subjectData.CED101.Attendance, subjectClass.CED101.ClassHeld);
                                if ((date.getDay() == 2 || date.getDay() == 4) && ((date.getHours() == 22) || (date.getHours() == 23 && date.getMinutes() == 0))) {
                                    initButton("#ced101AtteMark", subjectData.CED101.TimeStamp, '/users/' + user.uid + '/classes/CED101', subjectClass.CED101.ClassHeld + 1);
                                    $("#ced101AtteMark").on('click', function() {
                                        markAttendance('/users/' + user.uid + '/classes/CED101', subjectData.CED101.Attendance + 1, "#ced101AtteMark", subjectClass.CED101.ClassHeld);
                                        init(".ced101", "#ced101AttePercentage", "#ced101ProgressBar", subjectData.CED101.Attendance + 1, subjectClass.CED101.ClassHeld);
                                    });
                                } else {
                                    changeAttendaceButtonState("#ced101AtteMark");
                                }
                            }
                            if (subjectData.MED209) {
                                init(".med209", "#med209AttePercentage", "#med209ProgressBar", subjectData.MED209.Attendance, subjectClass.MED209.ClassHeld);
                                if ((date.getDay() == 1 || date.getDay() == 3) && ((date.getHours() == 21) || (date.getHours() == 22 && date.getMinutes() == 0))) {
                                    initButton("#med209AtteMark", subjectData.MED209.TimeStamp, '/users/' + user.uid + '/classes/MED209', subjectClass.MED209.ClassHeld + 1);
                                    $("#med209AtteMark").on('click', function() {
                                        markAttendance('/users/' + user.uid + '/classes/MED209', subjectData.MED209.Attendance + 1, "#med209AtteMark", subjectClass.MED209.ClassHeld);
                                        init(".med209", "#med209AttePercentage", "#med209ProgressBar", subjectData.MED209.Attendance + 1, subjectClass.MED209.ClassHeld);
                                    });
                                } else {
                                    changeAttendaceButtonState("#med209AtteMark");
                                }
                            }
                            if (subjectData.CSD101) {
                                init(".csd101", "#csd101AttePercentage", "#csd101ProgressBar", subjectData.CSD101.Attendance, subjectClass.CSD101.ClassHeld);
                                if ((date.getDay() == 1 || date.getDay() == 3) && ((date.getHours() == 21) || (date.getHours() == 22 && date.getMinutes() == 0))) {
                                    initButton("#csd101AtteMark", subjectData.CSD101.TimeStamp, '/users/' + user.uid + '/classes/CSD101', subjectClass.CSD101.ClassHeld + 1);
                                    $("#csd101AtteMark").on('click', function() {
                                        markAttendance('/users/' + user.uid + '/classes/CSD101', subjectData.CSD101.Attendance + 1, "#csd101AtteMark", subjectClass.CSD101.ClassHeld);
                                        init(".csd101", "#csd101AttePercentage", "#csd101ProgressBar", subjectData.CSD101.Attendance + 1, subjectClass.CSD101.ClassHeld);
                                    });
                                } else {
                                    changeAttendaceButtonState("#csd101AtteMark");
                                }
                            }
                            if (subjectData.EED102) {
                                init(".eed102", "#eed102AttePercentage", "#eed102ProgressBar", subjectData.EED102.Attendance, subjectClass.EED102.ClassHeld);
                                if ((date.getDay() == 1 || date.getDay() == 3) && ((date.getHours() == 22) || (date.getHours() == 23 && date.getMinutes() == 0))) {
                                    initButton("#eed102AtteMark", subjectData.EED102.TimeStamp, '/users/' + user.uid + '/classes/EED102', subjectClass.EED102.ClassHeld + 1);
                                    $("#eed102AtteMark").on('click', function() {
                                        markAttendance('/users/' + user.uid + '/classes/EED102', subjectData.EED102.Attendance + 1, "#eed102AtteMark", subjectClass.EED102.ClassHeld);
                                        init(".eed102", "#eed102AttePercentage", "#eed102ProgressBar", subjectData.EED102.Attendance + 1, subjectClass.EED102.ClassHeld);
                                    });
                                } else {
                                    changeAttendaceButtonState("#eed102AtteMark");
                                }
                            }
                            if (subjectData.CSD201) {
                                init(".csd201", "#csd201AttePercentage", "#csd201ProgressBar", subjectData.CSD201.Attendance, subjectClass.CSD201.ClassHeld);
                                if ((date.getDay() == 2 || date.getDay() == 4) && ((date.getHours() == 22) || (date.getHours() == 23 && date.getMinutes() == 0))) {
                                    initButton("#csd201AtteMark", subjectData.CSD201.TimeStamp, '/users/' + user.uid + '/classes/CSD201', subjectClass.CSD201.ClassHeld + 1);
                                    $("#csd201AtteMark").on('click', function() {
                                        markAttendance('/users/' + user.uid + '/classes/CSD201', subjectData.CSD201.Attendance + 1, "#csd201AtteMark", subjectClass.CSD201.ClassHeld);
                                        init(".csd201", "#ced101AttePercentage", "#csd201ProgressBar", subjectData.CSD201.Attendance + 1, subjectClass.CSD201.ClassHeld);
                                    });
                                } else {
                                    changeAttendaceButtonState("#csd201AtteMark");
                                }
                            }
                            if (subjectData.EED208) {
                                init(".eed208", "#eed208AttePercentage", "#eed208ProgressBar", subjectData.EED208.Attendance, subjectClass.EED208.ClassHeld);
                                if ((date.getDay() == 3 || date.getDay() == 5) && ((date.getHours() == 22) || (date.getHours() == 23 && date.getMinutes() == 0))) {
                                    initButton("#eed208AtteMark", subjectData.EED208.TimeStamp, '/users/' + user.uid + '/classes/EED208', subjectClass.EED208.ClassHeld + 1);
                                    $("#eed208AtteMark").on('click', function() {
                                        markAttendance('/users/' + user.uid + '/classes/EED208', subjectData.EED208.Attendance + 1, "#eed208AtteMark", subjectClass.EED208.ClassHeld);
                                        init(".eed208", "#eed208AttePercentage", "#eed208ProgressBar", subjectData.EED208.Attendance + 1, subjectClass.EED208.ClassHeld);
                                    });
                                } else {
                                    changeAttendaceButtonState("#eed208AtteMark");
                                }
                            }
                            if (subjectData.EED204) {
                                init(".eed204", "#eed204AttePercentage", "#eed204ProgressBar", subjectData.EED204.Attendance, subjectClass.EED204.ClassHeld);
                                if ((date.getDay() == 3 || date.getDay() == 5) && ((date.getHours() == 20) || (date.getHours() == 21 && date.getMinutes() == 0))) {
                                    initButton("#eed204AtteMark", subjectData.EED204.TimeStamp, '/users/' + user.uid + '/classes/EED204', subjectClass.EED204.ClassHeld + 1);
                                    $("#eed204AtteMark").on('click', function() {
                                        markAttendance('/users/' + user.uid + '/classes/EED204', subjectData.EED204.Attendance + 1, "#eed204AtteMark", subjectClass.EEd204.ClassHeld);
                                        init(".eed204", "#eed204AttePercentage", "#eed204ProgressBar", subjectData.EED204.Attendance + 1, subjectClass.EED204.ClassHeld);
                                    });
                                } else {
                                    changeAttendaceButtonState("#eed204AtteMark");
                                }
                            }
                            if (subjectData.MAT104) {
                                init(".mat104", "#mat104AttePercentage", "#mat104ProgressBar", subjectData.MAT104.Attendance, subjectClass.MAT104.ClassHeld);
                                if ((date.getDay() == 2 || date.getDay() == 4) && ((date.getHours() == 21) || (date.getHours() == 22 && date.getMinutes() == 0))) {
                                    initButton("#mat104AtteMark", subjectData.MAT104.TimeStamp, '/users/' + user.uid + '/classes/MAT104', subjectClass.MAT104.ClassHeld + 1);
                                    $("#mat104AtteMark").on('click', function() {
                                        markAttendance('/users/' + user.uid + '/classes/MAT104', subjectData.MAT104.Attendance + 1, "#mat104AtteMark", subjectClass.MAT104.ClassHeld);
                                        init(".mat104", "#mat104AttePercentage", "#mat104ProgressBar", subjectData.MAT104.Attendance + 1, subjectClass.MAT104.ClassHeld);
                                    });
                                } else {
                                    changeAttendaceButtonState("#mat104AtteMark");
                                }
                            }
                            if (subjectData.PHY102) {
                                init(".phy102", "#phy102AttePercentage", "#phy102ProgressBar", subjectData.PHY102.Attendance, subjectClass.PHY102.ClassHeld);
                                if ((date.getDay() == 2 || date.getDay() == 4) && ((date.getHours() == 20) || (date.getHours() == 21 && date.getMinutes() == 0))) {
                                    initButton("#phy102AtteMark", subjectData.PHY102.TimeStamp, '/users/' + user.uid + '/classes/PHY102', subjectClass.PHY102.ClassHeld + 1);
                                    $("#phy102AtteMark").on('click', function() {
                                        markAttendance('/users/' + user.uid + '/classes/PHY102', subjectData.PHY102.Attendance + 1, "#phy102AtteMark", subjectClass.PHY102.ClassHeld);
                                        init(".phy102", "#phy102AttePercentage", "#phy102ProgressBar", subjectData.PHY102.Attendance + 1, subjectClass.PHY102.ClassHeld);
                                    });
                                } else {
                                    changeAttendaceButtonState("#phy102AtteMark");
                                }
                            }
                            if (subjectData.CSD204) {
                                init(".csd204", "#csd204AttePercentage", "#csd204ProgressBar", subjectData.CSD204.Attendance, subjectClass.CSD204.ClassHeld);
                                if ((date.getDay() == 2 || date.getDay() == 5) && ((date.getHours() == 21) || (date.getHours() == 22 && date.getMinutes() == 0))) {
                                    initButton("#csd204AtteMark", subjectData.CSD204.TimeStamp, '/users/' + user.uid + '/classes/CSD204', subjectClass.CSD204.ClassHeld + 1);
                                    $("#csd204AtteMark").on('click', function() {
                                        markAttendance('/users/' + user.uid + '/classes/CSD204', subjectData.CSD204.Attendance + 1, "#csd204AtteMark", subjectClass.CSD204.ClassHeld);
                                        init(".csd204", "#csd204AttePercentage", "#csd204ProgressBar", subjectData.CSD204.Attendance + 1, subjectClass.CSD204.ClassHeld);
                                    });
                                } else {
                                    changeAttendaceButtonState("#csd204AtteMark");
                                }
                            }
                            if (subjectData.EED205) {
                                init(".eed205", "#eed205AttePercentage", "#eed205ProgressBar", subjectData.EED205.Attendance, subjectClass.EED205.ClassHeld);
                                if ((date.getDay() == 1 || date.getDay() == 4) && ((date.getHours() == 20) || (date.getHours() == 21 && date.getMinutes() == 0))) {
                                    initButton("#eed205AtteMark", subjectData.EED205.TimeStamp, '/users/' + user.uid + '/classes/EED205', subjectClass.EED205.ClassHeld + 1);
                                    $("#eed205AtteMark").on('click', function() {
                                        markAttendance('/users/' + user.uid + '/classes/EED205', subjectData.EED205.Attendance + 1, "#eed205AtteMark", subjectClass.EED205.ClassHeld);
                                        init(".eed205", "#eed205AttePercentage", "#eed205ProgressBar", subjectData.EED205.Attendance + 1, subjectClass.EED205.ClassHeld);
                                    });
                                } else {
                                    changeAttendaceButtonState("#eed205AtteMark");
                                }
                            }
                        }
                    });
                }
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

function display(user) {
    $("#userName").text(user.displayName);
    $("#userNameh3").text(user.displayName);
    $(".userProfileImage").attr("src", user.photoURL);
}

function markAttendance(classURL, attendanceValue, subjectAtteMark, classHeld) {
    var curDate = new Date();
    firebase.database().ref(classURL).set({
        Attendance: attendanceValue,
        TimeStamp: curDate.toString()
    });
    $(subjectAtteMark).html("Attendance Marked");
    $(subjectAtteMark).removeAttr("href");
}

function init(subjectClass, subjectAttePer, subjectProgressBar, attendanceValue, classHeld) {
    $(subjectClass).show();
    $(subjectAttePer).html((attendanceValue / classHeld) * 100);
    $(subjectProgressBar).css({ 'width': ((attendanceValue / classHeld) * 100) + "%" });
}

function changeAttendaceButtonState(atteMark) {
    $(atteMark).html("Attendance Not Started");
    $(atteMark).removeAttr("href");
}

function initButton(atteMark, atteTimeStamp, classUrl, classHeld) {
    var timeStamp = new Date(atteTimeStamp);
    var curTime = new Date();
    if (timeStamp.getDate() == curTime.getDate() && timeStamp.getMonth() == curTime.getMonth() && timeStamp.getFullYear() == curTime.getFullYear()) {
        changeAttendaceButtonState(atteMark);
    }
}