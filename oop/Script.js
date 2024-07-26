const Computer = require("./Computer");
const Person = require("./Person");

let student = new Person("John", "Smith", 45, "Actor", true);
let newStudent = new Person("Mike", "Zeil", 24, "Engeneer", true);

let type = new Computer("AMD", 8, "Windows", 512, false);

student.intriduce();
type.description();
