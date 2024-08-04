async function getWeather() {
  try {
    // City Name Input Value Getting
    const cityInput = document.body.querySelector("#cityName");
    const cityName = cityInput.value;
    // API Fetching to URL with Request Type Get
    // Dynamic City Weather Get using Template Literals
    const response = await fetch(
      `https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}}`,
      {
        method: "GET",
      }
    );
    // if (!response.ok) {
    //   alert("Invalid City Name");
    //   return;
    // }
    // Weather API Response to JSON
    const weatherDetail = await response.json();
    if (weatherDetail["error"]) {
      alert("Invalid City Name");
      return;
    }
    // Object Destructuring
    const temperature = weatherDetail["current"]["temp_c"];
    const weatherCondition = weatherDetail["current"]["condition"]["text"];

    // Append to HTML DOM
    document.body.querySelector("#temp").innerHTML = `${temperature}C`;
    document.body.querySelector("#temp_condition").innerHTML = weatherCondition;
  } catch (err) {
    alert("Something Went wrong, Check your internet connection");
  }
}
