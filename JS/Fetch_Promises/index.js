// Promises

let result = new Promise((resolve, reject) => {
  let x = 5;
  if (x == 5) {
    resolve({ value: x });
  } else {
    reject("Value of X is not 5 ");
  }
});
//
// result.then((res) => {
//   console.log("Then");
//   console.log(res);
// });
// // Error Handling
// result.catch((error) => {
//   console.log("Catch");
//   console.log(error);
// });

// result.finally(() => {
//   console.log("Yes my promise has eneded");
//   // stop the spinner
// });

function getPosts() {
  let p = new Promise((resolve, reject) => {
    let x = 5;
    if (x == 5) {
      resolve({ value: x });
    } else {
      reject("Value of X is not 5 ");
    }
  });

  return p;
}

let res = getPosts();
res.then((response) => {});

// Make A fution which will return a promise,
// THen Catch finally

function postsPromise() {
  return new Promise((resolve, reject) => {
    let y = 6;
    if (y == 5) {
      resolve(5);
    } else {
      reject("Value Error ");
    }
  });
}

async function getPostsThrough() {
  try {
    let result = await postsPromise();

    console.log(result);
  } catch (err) {
    console.log(err);
    console.error("The promise you made above has error ");
  } finally {
    console.log("Yes your promise has been completed");
  }
}
// Error Handling Missing
// Try Catch Finally
// getPostsThrough();

// API's
// Application programming interface

// Status Codes
// Fetching
// Fetching methods

async function getPostsAPI() {
  try {
    const res = await fetch(
      "https://p2pclouds.up.railway.app/v1/learn/get_instagram_posts"
    );
    console.log(res.ok);
    console.log(res.status);
    if (res.ok == true) {
      let postsResult = await res.json();
      let endResult = postsResult["posts"];
      const parentDiv = document.querySelector("#posts");

      for (let i = 0; i < endResult.length; i++) {
        const h1Child = document.createElement("h1");
        h1Child.innerText = endResult[i].postDescription;
        parentDiv.appendChild(h1Child);
      }
    } else {
      alert("Error while fetchin");
      return;
    }
  } catch (err) {
  } finally {
  }
}

getPostsAPI();
