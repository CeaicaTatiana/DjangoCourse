var firstName = prompt("Hello and Welcome! Please enter your First Name:");
var lastName = prompt("Enter your Last Name");
var age = prompt("How old are you?");
var height = prompt("How tall are you in cm?");
var petName = prompt("What is the name of your pet?");
alert("Thank you so much for the information!");


var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

//Name condition
if (firstName[0] === lastName[0]) {
  nameCond = true;
} else {
  nameCond = false;
}
//Age condition
if (age > 20 && age <= 30) {
  ageCond = true;
} else {
  ageCond = false;
}

//Height condition

if (height <= 170) {
  heightCond = true;
} else {
  heightCond = false;
}

// Pet condition

if (petName[petName.length-1] === "y") {
  petCond = true;
} else {
  petCond = false;
}

if (nameCond && ageCond && heightCond && petCond) {
  console.log("Welcome Spy!");
} else {
  console.log("Nothing to see here!");
}
