
const API_KEY = "9e956fe603431111ac4da71f31ca274e";

function onGeoOk(position) {
  const lat = position.coords.latitude; //37.0087888
  const lon = position.coords.longitude; //127.1365699
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  fetch(url)
    .then(response => response.json())
    .then(data =>{
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
  });
}
function onGeoError() {
  alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);  

