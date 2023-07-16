// get user's location from browser data

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(logPosition);
}

// convert browser location data to lat and long
var user_loc = {};
function logPosition(position) {
  user_loc.lat = position.coords.latitude;
  user_loc.long = position.coords.longitude;
}
console.log("user lat and long are: " + user_loc);


// send API request
if (user_loc.lat && user_loc.long) {
  fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + user_loc.lat + '&' + user_loc.long + '&appid=16d53a9f2b7005ab7bb76548d745d586')
    .then(response => response.text())
    .then(text => console.log(text))
}

// put data to display into object properties to be displayed

// render to view 