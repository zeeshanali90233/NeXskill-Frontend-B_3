// For Checking the Connectivity
// alert("I am Linked");

// for
// let myName = prompt("Enter your name");
// let numOfIter = prompt("How many times should, we print it?");
// // Type Casting
// numOfIter = Number(numOfIter); //5

// // 0<=5 T
// // 1<=5 T
// // 2<=5 T
// // 3<=5 T
// // 4<=5 T
// // 5<5 F
for (let i = 0; i < numOfIter; i = i + 1) {
  console.log(myName);

  if (i == 5) {
    continue;
  }
}

// While Loop
// while (myName !== "Ali") {
//   myName = prompt("Enter your name");
//   console.log(myName);
// }

let isBlocked = false;
// if (myName === "Ali" && myName !== "Zee") {
//   isBlocked = true;
// }

if (isBlocked) {
} else {
}

let choice = prompt("Enter 1 for add, 2 for multiply , 3 for sub");
let result;
// Value Based Cases
switch (choice) {
  case "1":
    result = 10 + 10;
    break;
  case "2":
    result = 10 * 10;
    break;
  case "3":
    result = 10 - 10;
    break;
  default:
    console.log("Not a Correct option ...");
    break;
}

console.log(result);

// Functions

// Function Definition
function checkAgeEligibility(age, name) {
  if (age >= 18) {
    console.log(name + " your are Eligible");
  } else {
    console.log(name + " your are not Eligible");
  }
}

let myName = prompt("Enter your name");
let age = prompt("Enter your age");
age = Number(age);

// Single & Multiple Parameters
// Function Call
checkAgeEligibility(age, myName);

function sayHello() {
  console.log("Hi!");
}

if (age == 18) {
  sayHello();
}

let name1 = "Ali";
let name2 = "Zee";
let name3 = "ZeeAl";
