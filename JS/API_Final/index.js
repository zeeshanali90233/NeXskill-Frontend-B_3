const updateTweet = async () => {
  try {
    const tweetId = document.querySelector("#tweetId").value;
    const tweetImage = document.querySelector("#tweetImage").value;
    const tweetDescriptiion = document.querySelector("#tweetDescription").value;

    const res = await fetch(
      "https://p2pclouds.up.railway.app/v1/learn/tweet/update",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tweetId: tweetId,
          tweetImage: tweetImage,
          tweetDescription: tweetDescriptiion,
        }),
      }
    );
    const response = await res.json();
    console.log(response);
    alert("Tweet Updated Successfully");
  } catch (err) {
    console.log(err);
  }
};

const saveTweet = async () => {
  try {
    const tweetImage = document.querySelector("#tweetImage").value;
    const tweetDescriptiion = document.querySelector("#tweetDescription").value;

    const res = await fetch(
      "https://p2pclouds.up.railway.app/v1/learn/tweet/save",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tweetImage: tweetImage,
          tweetDescription: tweetDescriptiion,
        }),
      }
    );
    const response = await res.json();
    console.log(response);
    alert("Tweet Saved Successfully");
  } catch (err) {
    console.log(err);
  }
};

const deleteTweet = async () => {
  try {
    const tweetId = document.querySelector("#tweetId").value;

    const res = await fetch(
      "https://p2pclouds.up.railway.app/v1/learn/tweet/delete",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tweetId: tweetId,
        }),
      }
    );
    const response = await res.json();
    console.log(response);
    alert("Tweet Deleted Successfully");
  } catch (err) {
    console.log(err);
  }
};
