console.log("This works");

const WEATHER_API_KEY = config.WEATHER_API_KEY;

function getWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=10011&APPID=${WEATHER_API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            //store the data in a variable for later use
            let local_weather_data = data;
            //log the data to the browser console to see what it looks like
            console.log(local_weather_data);
        });
}
let btn = document.querySelector(".search-button");
btn.addEventListener('click', getZipCode);
function getZipCode() {
    console.log('I was clicked!');
}
function getZipCode(e) {
    e.preventDefault();
    console.log(e);
}
const input = document.querySelector(".zipcode");
let ZIP_CODE = input.value;
