
function validateForm(currentStudent, currentGrade) {
    if (currentStudent.length < 1 || currentStudent[0] !== currentStudent[0].toUpperCase() || (!currentStudent.includes(" "))) {
        return false;
    }
    var spacePosition = currentStudent.indexOf(" ");
    for (var i = 0; i < currentStudent.length; i++) {
        if (currentStudent[spacePosition + 1] !== currentStudent[spacePosition + 1].toUpperCase()) {
            return false;
        }
    }
    if (currentGrade < 5 || currentGrade > 10) {
        return false;
    }
}

function collectData(report) {
    var currentSubject = addSubject.value;
    var currentStudent = addStudentName.value;
    var currentGrade = addGrade.value;

    if (validateForm(currentStudent) == false) {
        alert("Enter valid student name");
        return;
    }
    if (validateForm(currentStudent, currentGrade) == false) {
        alert("Enter valid grade");
        return;
    } else {
        var currentStudentName = currentStudent.split(" ")[0];
        var currentStudentSurname = currentStudent.split(" ")[1];
        var student = new Student(currentStudentName, currentStudentSurname);
        var subject = new Subject(currentSubject);
        var exam = new Exam(subject, student, currentGrade);
        report.addExam(exam);
    }
};
function updateFields(report) {
    totalExams.textContent = report.getTotalExams();
    examPassedCount.textContent = report.getTotalPassed();
    examFailedCount.textContent = report.getTotalFailed();
    examPassedPercentage.textContent = report.getPassedPercent();
    examFailedPercentage.textContent = report.getFailedPercent();
};
