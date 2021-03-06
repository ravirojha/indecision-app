class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, I am ${this.name}!`;
  }
  getDesciption() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDesciption() {
    let description = super.getDesciption();

    if(this.hasMajor()) {
        description += ` Their major is ${this.major}`;
    }

    return description;
  }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation)
        {
            greeting += ` I am visiting from ${this.homeLocation}`;
        }

        return greeting;
    }

}

const me = new Traveller("Ravi Ranjan Ojha", 23, "Varanasi");
console.log(me.getGreeting());

const other = new Traveller(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());
