function Report() {
    this.date = new Date();
    this.listOfExams = [];
}

Report.prototype.addExam = function (exam) {
    this.listOfExams.push(exam);
}
Report.prototype.getTotalExams = function () {
    var sumOfExams = 0;
    for (var i = 0; i < this.listOfExams.length; i++) {
        sumOfExams++;
    }
    return sumOfExams;
}
Report.prototype.getTotalPassed = function () {
    var sumOfPassed = 0;
    for (var i = 0; i < this.listOfExams.length; i++) {
        if (this.listOfExams[i].grade > 5) {
            sumOfPassed++;
        }
    }
    return sumOfPassed;
}
Report.prototype.getTotalFailed = function () {
    var sumOfFailed = 0;
    for (var i = 0; i < this.listOfExams.length; i++) {
        if (this.listOfExams[i].grade === 5) {
            sumOfFailed++;
        }
    }
    return sumOfFailed;
}