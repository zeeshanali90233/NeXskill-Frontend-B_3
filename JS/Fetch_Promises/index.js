// URL:    "https://p2pclouds.up.railway.app/v1/learn/get_instagram_posts"
// Request Type: GET

async function getInstaPosts() {
  try {
    const response = await fetch(
      "https://p2pclouds.up.railway.app/v1/learn/get_instagram_posts",
      {
        method: "GET",
      }
    );
    const instaPosts = await response.json();
    console.log(instaPosts);
    // Template Literals
    const mainDiv = document.body.querySelector("#posts");
    // Alternate Loop
    // for (let i=0;i<instaPosts["tweets"].length;i++){
    //   instaPosts["tweets"][i]['tweet']
    // }
    for (let postItem of instaPosts["tweets"]) {
      const postDiv = document.createElement("div");
      postDiv.innerHTML = `
      <h1>${postItem["tweetId"]}</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ07_FdK5kVBqaGxZzz0ogdASDnRs0BQWJ_h_KhrvLAJmx2x70ewh6_pLRlZ8OrDJgGdm8&usqp=CAU"/>
      <p>${postItem["tweetDescription"]}</p>
      `;
      mainDiv.appendChild(postDiv);
    }
  } catch (err) {
    console.log(err);
  }
}

getInstaPosts();
