// get user's location from browser data
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getForecast);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

// send API request
function getForecast(position) {
  fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=16d53a9f2b7005ab7bb76548d745d586&exclude=hourly')
    .then((response) => response.json())
    .then(json => weatherData = json)
    .then(json => checkForRain(weatherData))
}

// examine probablity of rain from API data
function checkForRain() {
  const main = weatherData.list[0].weather[0].main.toLowerCase();
  const description = weatherData.list[0].weather[0].description.toLowerCase();
  var gonnaRain;
  if (main.includes('rain') || description.includes('rain')) {
    gonnaRain = true;
    console.log("yeah, probably");
  } else {
    gonnaRain = false;
    console.log("probably not");
  }
}

// render to view 