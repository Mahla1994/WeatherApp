let h6 = document.querySelector("h6");
let now = new Date();
let Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = Days[now.getDay()];
let date = now.getDate();
let year = now.getFullYear();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let Months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = Months[now.getMonth()];
h6.innerHTML = `${day} ${date} ${month} ${year}, ${hour}:${minutes}`;

function searching(event) {
  event.preventDefault();
  let h1 = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  h1.innerHTML = `${cityInput.value.charAt(0).toUpperCase()+cityInput.value.slice(1)}`;
  let city = cityInput.value;
  let apiKey = "e956d693a82e928d5c439971c63d2d44";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
  }
  
  function showWeather(response){
    console.log(response)

    let currentDisc = response.data.weather[0].description
    document.querySelector('#weatherDisc').innerHTML = `${currentDisc}`;

    let currentTemp = Math.round(response.data.main.temp)
    document.querySelector('#temp-value').innerHTML = `${currentTemp}`;

    let currentWind = Math.round(response.data.wind.speed)
    document.querySelector('#windValue').innerHTML = `${currentWind} KMPH`;

    let currenthumid = Math.round(response.data.main.humidity)
    document.querySelector('#humdValue').innerHTML = `${currenthumid}%`;
  }

let searchCity = document.querySelector("#search-city");
searchCity.addEventListener("submit", searching);


let button = document.querySelector("#locationButt");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(findPosition);
});

function findPosition(position){
    let long = position.coords.longitude
    let lat = position.coords.latitude
    let apiKey = "e956d693a82e928d5c439971c63d2d44";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
}
