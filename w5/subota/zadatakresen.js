function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.getFullName = function () {
    return this.name + " " + this.surname;
}

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = parseInt(salary);
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {
    var fullName = Object.getPrototypeOf(Employee.prototype).getFullName.call(this);
    return "Name: " + fullName + ", job: " + this.job + ", salary: " + this.getSalary() + "e";
}

Employee.prototype.getSalary = function () {
    return parseInt(this.salary);
}

Employee.prototype.increaseSalary = function (increase) {
    increase = increase || 1.1
    var updatesSalary = parseInt(this.salary * increase);
    this.salary = updatesSalary;
}

function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
    return this.specialization;
}

function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary)
    this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

// Method overriding
Manager.prototype.getData = function () {
    var employeeData = Object.getPrototypeOf(Manager.prototype).getData.call(this);
    return employeeData + ", department: " + this.getDepartment();
}

Manager.prototype.getDepartment = function () {
    return this.department;
}

Manager.prototype.changeDepartment = function (department) {
    this.department = department;
}

var generalManager = new Manager("Pera", "Mikic", "Project manager", 1200, "IT");
generalManager.changeDepartment("HR")
generalManager.increaseSalary();

var output = generalManager.getData() + ", department: " + generalManager.getDepartment();
generalManager.increaseSalary()
output = generalManager.getData();

console.log(output);