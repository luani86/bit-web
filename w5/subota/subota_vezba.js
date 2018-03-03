// Kreiranje objaekta konstruktor funkcijom sa prototipom (zajednicka svojstva)

// function Person(name, surname, age){
//     this.name = name;
//     this.surname = surname;
//     this. age = age;
// }

// Person.prototype.ocupation = "programer";
// Person.prototype.print = function(){
//     console.log(this.name, this.surname, this.age, this.ocupation);
// }

// var pera = new Person ("pera", "peric", 28);
// pera.print();

// var zika = new Person ("zika", "zikic", 30);
// zika.print();

// Nasledjivanje

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.getFullName = function () {
    return this.name + " " + this.surname;
}
//  var pera = new Person("pera", "peric");
//   console.log(pera.getFullName());

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    // var p = new Person(name, surname);
    this.job = job;
    this.salary = parseInt(salary);
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {
    // var fullName = Object.getPrototypeOf(Employee.prototype).getFullName;
    // console.log(fullName === this.getFullName);

    // var fullName = this.getFullName();
    return "name: " + this.getFullName() + "job: " + this.job + "salary: " + this.salary + " e";
}

var employee1 = new Employee("pera", "peric", "programer", 500);
console.log(employee1);
console.log(employee1.getFullName());
console.log(employee1.getData());

function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getData = function () {
    return Employee.prototype.getData.call(this) + " Department: " + this.department;
}

var manager_1 = new Manager("Miloje", "Milojevic", "Menadzer", "1000", "HR");

console.log(manager_1.getData());
