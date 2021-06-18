// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  //console.log(arguments);

  return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound

const user = {
  name: "Ravi",
  cities: ["Varanasi", "Delhi", "Noida"],
  printPlacesLived() {
      return this.cities.map((city) => this.name + ' has lived in ' + city);

    // console.log(this.name);
    // console.log(this.cities);
    // this.cities.forEach((city) => {
    //   console.log(this.name + " has lived in " + city);

   // });
  },
};

//console.log(user.printPlacesLived());


const multiplier = {
    number: [2,4,8,9,7],
    multilplyBy: 3,
    multiply() {
        return this.number.map((multiplicant) => this.multilplyBy*multiplicant);
    }
}

console.log(multiplier.multiply()); 