function toggleTheme() {
  const body = document.body;
  // Dynamic Styling Change
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    localStorage.setItem("theme", "light");
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    localStorage.setItem("theme", "dark");
  }
}

function init() {
  const lastTheme = localStorage.getItem("theme");
  const body = document.body;
  if (lastTheme === "dark") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else if (lastTheme === "light") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
}

init();

// Theme Persistance
// Style Handling using Dom
// Local Storage & Session Storage

const themeBtn = document.body.querySelector("#btn-theme");

// Click for checking if mouse clicked on it
// Mouseover , when mouse /cursor came inside that area
// Mouseout , when mouse /cursor came outside that area
themeBtn.addEventListener("mouseover", (e) => {
  //   toggleTheme();
  const xAxis = e.x;
  const yAxis = e.y;
  const themeBtn = document.body.querySelector("button#btn-theme");
  themeBtn.style.marginTop = yAxis + "px";
  themeBtn.style.marginLeft = xAxis + "px";

  themeBtn.classList.replace("black", "white");
  console.log(themeBtn.classList);
});

// Event Listerners

// Promises
const x = 5;
new Promise((resolve, reject) => {
  console.log("I am Promise");
  if (x === 5) {
    resolve({
      name: "Zeeshan Ali",
      CNIC: "dd",
    });
  } else {
    reject({
      code: "504",
      message: "Incorrect Name",
    });
  }
})
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
    alert("Something went wrong, check your internet");
  });

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 2000);
});

console.log(myPromise);
myPromise.then((value) => {
  console.log("Yes I Called After 2 Sec");
});

myPromise.catch((error) => {
  console.log("Yes I Called Catch");
});

// const tim = setInterval(() => {
//   toggleTheme();
// }, 5000);
// if (x == 5) {
//   clearInterval(tim);
// }

function getInstaPosts() {
  console.log("I iiii");
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Hello I am Resolve");
    }, 2000);
  });
  myPromise.then((value) => {
    console.log("Yes I Called After 2 Sec");

    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Hello I am Resolve");
      }, 2000);
    });
    myPromise.then((value) => {
      console.log("Yes I Called After 2 Sec");
    });

    myPromise.catch((error) => {
      console.log("Yes I Called Catch");
    });
  });
  myPromise.catch((error) => {
    console.log("Yes I Called Catch");
  });
}
async function getInstaPosts() {
  console.log("I iiii");
  try {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Hello I am Resolve");
      }, 2000);
    });
    const response = await myPromise;

    console.log(response);
  } catch (err) {
    alert("Yes, error occured in promise");
  }
}

getInstaPosts();
