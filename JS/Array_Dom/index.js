const studentNames = ["Zeeshan", "Ali", "Asad"];

studentNames.push("Nazir");
studentNames.push("Wasif");
studentNames.push("Nouman");
studentNames.push("Non");

const nexskillStudentNames = ["Zafar", "Nouman"];

const finalStudents = studentNames.concat(nexskillStudentNames);

studentNames.unshift("Wasif2");
studentNames.shift();
console.log(studentNames);

const trimmedArray = studentNames.slice(1, 5);
studentNames.splice(1, 3);
console.log(studentNames);

const myFilterFunc = () => {
  console.log("Anonymouse func");
};

myFilterFunc();

studentNames.map((element) => {
  console.log(element);
});

nexskillStudentNames.map((element) => {
  console.log(element);
});

const filteredArray = studentNames.filter((element) => {
  if (element.startsWith("N")) {
    return element;
  }
});

console.log(filteredArray);

const age = [10, 20, 15, 6, 7, 28];

// const eligibleAges = age.filter((element) => {
//   if (element >= 18) {
//     return element;
//   }
// });

const eligibleAges1 = age.filter((element) => {
  if (element >= 18) {
    return element;
  }
});
const eligibleAges2 = age.map((element) => {
  if (element >= 18) {
    return element;
  }
});

console.log(eligibleAges1);
console.log(eligibleAges2);

const age1 = [3, 4, 5, 6, 10, 5, 55, 32, 45, 12];

// DOM
// document.body.innerText += "Ali";

function printMyName() {
  const myNameInputField = document.querySelector("#name");
  console.log(myNameInputField.value);
}

function calculateAge() {
  // Number Input Field
  let myAgeField = document.querySelector("#age");
  //   Number Input Field Value Get
  const userBY = myAgeField.value;
  //   2024 - userEnteredBirthYear
  const userAge = 2024 - userBY;
  //   Alert User Age
//   alert("Your age is " + userAge);
  // DOM to HTML Div

  //   H4 to Result DIv
  const resultDiv = document.querySelector(".result");
  const h1Tag = document.createElement("h4");
  h1Tag.innerText = "Your age is " + userAge;
  h1Tag.className = "resultH1";

  resultDiv.appendChild(h1Tag);

  //   Result Div Direct Add
  //   const resultDiv = document.querySelector(".result");
  //   console.log(resultDiv.innerHTML);
  //   resultDiv.innerHTML = "Your age is " + userAge;

  //   Prompt
//   const userBY2 = prompt("Enter your age");
//   //   2024 - userEnteredBirthYear
//   const userAge2 = 2024 - userBY2;
//   //   Alert User Age
//   alert("Your age is " + userAge2);
}
