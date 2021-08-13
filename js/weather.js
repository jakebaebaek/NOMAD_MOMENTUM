
const API_KEY = "9e956fe603431111ac4da71f31ca274e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  fetch(url);
}
function onGeoError() {
  alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);  
