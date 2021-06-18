var nameVar = "Ravi";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Anuj";
nameLet = "Prashant";
console.log("nameLet", nameLet);

const nameConst = "Pratiksha";
console.log("nameConst", nameConst);

function getPetName() {
  const petName = "chiku";
  return petName;
}

const petName = getPetName();
console.log(petName);

// Block Scoping
const fullName = "Ravi Ranjan Ojha";
let firstName;
if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);