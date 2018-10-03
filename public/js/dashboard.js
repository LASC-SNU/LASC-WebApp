$(document).ready(function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            display(user);
            $(".csd101").hide();
            $(".eco203").hide();
            $(".eed201").hide();
            $(".phy101").hide();
            $(".med201").hide();
            var classesData = firebase.database().ref('/users/' + user.uid + '/classes/').once('value', function(snapshot) {
                if (snapshot.exists()) {
                    var subjectClass;
                    var subject = firebase.database().ref('/subject/').once('value', function(subjectSnapshot) {
                        if (subjectSnapshot.exists()) {
                            subjectClass = subjectSnapshot.val();
                            var date = new Date();
                            var subjectData = snapshot.val();
                            if (subjectData.CSD101) {
                                init(".csd101", "#csd101AttePercentage", "#csd101ProgressBar", subjectData.CSD101.Attendance, subjectClass.CSD101.ClassHeld);
                                if ((date.getDay() == 1 && (date.getHours() == 21)) || (date.getDay() == 3 && (date.getHours() == 21))) {
                                    initButton("#csd101AtteMark", subjectData.CSD101.TimeStamp, '/users/' + user.uid + '/classes/CSD101', subjectClass.CSD101.ClassHeld + 1);
                                    $("#csd101AtteMark").on('click', function() {
                                        markAttendance('/users/' + user.uid + '/classes/CSD101', subjectData.CSD101.Attendance + 1, "#csd101AtteMark", subjectClass.CSD101.ClassHeld);
                                        init(".csd101", "#csd101AttePercentage", "#csd101ProgressBar", subjectData.CSD101.Attendance + 1, subjectClass.CSD101.ClassHeld);
                                    });
                                } else {
                                    changeAttendaceButtonState("#csd101AtteMark");
                                }
                            }
                            if (subjectData.ECO203) {
                                init(".eco203", "#eco203AttePercentage", "#eco203ProgressBar", subjectData.ECO203.Attendance, subjectClass.ECO203.ClassHeld);
                                if (((date.getDay() == 2 || date.getDay() == 4) && date.getHours() == 21)) {
                                    initButton("#eco203AtteMark", subjectData.EED102.TimeStamp, '/users/' + user.uid + '/classes/ECO203', subjectClass.ECO203.ClassHeld + 1);
                                    $("#eco203AtteMark").on('click', function() {
                                        markAttendance('/users/' + user.uid + '/classes/ECO203', subjectData.ECO203.Attendance + 1, "#eco203AtteMark", subjectClass.ECO203.ClassHeld);
                                        init(".eco203", "#eco203AttePercentage", "#eco203ProgressBar", subjectData.ECO203.Attendance + 1, subjectClass.ECO203.ClassHeld);
                                    });
                                } else {
                                    changeAttendaceButtonState("#eco203AtteMark");
                                }
                            }
                            if (subjectData.EED201) {
                                init(".eed201", "#eed201AttePercentage", "#eed201ProgressBar", subjectData.EED201.Attendance, subjectClass.EED201.ClassHeld);
                                if ((date.getDay() == 1 && date.getHours() == 21) || (date.getDay() == 3 && date.getHours() == 21)) {
                                    initButton("#eed201AtteMark", subjectData.EED201.TimeStamp, '/users/' + user.uid + '/classes/EED201', subjectClass.EED201.ClassHeld + 1);
                                    $("#eed201AtteMark").on('click', function() {
                                        markAttendance('/users/' + user.uid + '/classes/EED201', subjectData.EED201.Attendance + 1, "#eed201AtteMark", subjectClass.EED201.ClassHeld);
                                        init(".eed201", "#eed201AttePercentage", "#eed201ProgressBar", subjectData.EED201.Attendance + 1, subjectClass.EED201.ClassHeld);
                                    });
                                } else {
                                    changeAttendaceButtonState("#eed201AtteMark");
                                }
                            }
                            if (subjectData.PHY101) {
                                init(".phy101", "#phy101AttePercentage", "#phy101ProgressBar", subjectData.PHY101.Attendance, subjectClass.PHY101.ClassHeld);
                                if ((date.getDay() == 2 && (date.getHours() == 21)) || (date.getDay() == 4 && (date.getHours() == 21))) {
                                    initButton("#phy101AtteMark", subjectData.PHY101.TimeStamp, '/users/' + user.uid + '/classes/PHY101', subjectClass.PHY101.ClassHeld + 1);
                                    $("#phy101AtteMark").on('click', function() {
                                        markAttendance('/users/' + user.uid + '/classes/PHY101', subjectData.PHY101.Attendance + 1, "#phy101AtteMark", subjectClass.PHY101.ClassHeld);
                                        init(".phy101", "#phy101AttePercentage", "#phy101ProgressBar", subjectData.PHY101.Attendance + 1, subjectClass.PHY101.ClassHeld);
                                    });
                                } else {
                                    changeAttendaceButtonState("#phy101AtteMark");
                                }
                            }
                            if (subjectData.MED201) {
                                init(".med201", "#med201AttePercentage", "#med201ProgressBar", subjectData.MED201.Attendance, subjectClass.MED201.ClassHeld);
                                if ((date.getDay() == 2 && date.getHours() == 22) || (date.getDay() == 4 && date.getHours() == 22)) {
                                    initButton("#med201AtteMark", subjectData.MED201.TimeStamp, '/users/' + user.uid + '/classes/MED201', subjectClass.MED201.ClassHeld + 1);
                                    $("#med201AtteMark").on('click', function() {
                                        markAttendance('/users/' + user.uid + '/classes/MED201', subjectData.MED201.Attendance + 1, "#med201AtteMark", subjectClass.MED201.ClassHeld);
                                        init(".med201", "#med201AttePercentage", "#med201ProgressBar", subjectData.MED201.Attendance + 1, subjectClass.MED201.ClassHeld);
                                    });
                                } else {
                                    changeAttendaceButtonState("#med201AtteMark");
                                }
                            }
                        }
                    });
                }
            });
            $("#logoutButton").on('click', function() {
                firebase.auth().signOut().then(function() {
                    pause(10000);
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

function pause(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}

function markAttendance(classURL, attendanceValue, subjectAtteMark, classHeld) {
    var curDate = new Date();
    firebase.database().ref(classURL).set({
        Attendance: attendanceValue,
        TimeStamp: curDate.toString()
    });
    $(subjectAtteMark).html("Attendance Marked");
    $(subjectAtteMark).css({ 'color': 'white' });
    $(subjectAtteMark).removeAttr("href");
}

function init(subjectClass, subjectAttePer, subjectProgressBar, attendanceValue, classHeld) {
    $(subjectClass).show();
    $(subjectAttePer).html((attendanceValue / classHeld) * 100);
    $(subjectProgressBar).css({ 'width': ((attendanceValue / classHeld) * 100) + "%" });
}

function changeAttendaceButtonState(atteMark) {
    $(atteMark).html("Attendance Not Started");
    $(atteMark).css({ 'color': 'white' });
    $(atteMark).removeAttr("href");
}

function initButton(atteMark, atteTimeStamp, classUrl, classHeld) {
    var timeStamp = new Date(atteTimeStamp);
    var curTime = new Date();
    if (timeStamp.getDate() == curTime.getDate() && timeStamp.getMonth() == curTime.getMonth() && timeStamp.getFullYear() == curTime.getFullYear()) {
        changeAttendaceButtonState(atteMark);
    }
}
