// Arrays
let myNames = [1, 2, 50, "Ali", "Zeeshan", "12", "dsd"];

// Index Always Starts from zero
console.log(myNames[5]);
console.log(myNames[0]);
console.log(myNames[1]);
console.log(myNames[2]);

console.log(myNames[2]);

// Number of Elements
let lengthOfMyArray = myNames.length;

console.log(lengthOfMyArray);

myNames.push("Asad");
myNames.push("Farhad");
myNames.push("Farhan");
myNames.push("Farhan");
myNames.push(1);
myNames.push(2);
myNames.push(true);
myNames.push(false);
myNames.push(2.3);

console.log(myNames);

lengthOfMyArray = myNames.length;

console.log(lengthOfMyArray);

let removed = myNames.pop();
let removed1 = myNames.pop();
myNames.pop();

console.log(myNames);
console.log(removed);

function checkEligibility(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

function add(a, b) {
  let result = a + b;
  return result;
}

let isEligible = checkEligibility(17);

let result = add(2, 5);
if (result === 7) {
} else {
}

let equation = "2+2*7/(2)";

let result1 = Math.eval(equation);
console.log(result1);
