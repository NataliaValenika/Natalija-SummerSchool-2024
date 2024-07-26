class Person {
  constructor(name, surname, age, job, isSleeping) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.job = job;
    this.isSleeping = isSleeping;
  }

  sleeping() {
    return (this.isSleeping = true);
  }

  calcage() {
    return 2024 - this.age;
  }

  intriduce() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

module.exports = Person;

new Person("Natalija", "Valenika", 23, "Game presenter", false).intriduce();
