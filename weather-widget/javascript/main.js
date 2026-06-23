console.log("This works");

const config = {
    WEATHER_API_KEY: "8fa484ce9c89dba29bf695f05ec131b8"
};

const WEATHER_API_KEY = config.WEATHER_API_KEY;

let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");
let form = document.querySelector("form");

let CITY_NAME = document.querySelector(".city_name");
let CITY_TEMP = document.querySelector(".temperature");

let image = document.querySelector("img");

const getWeatherData = (zip) => {
    let API_KEY = config.WEATHER_API_KEY;
    let API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${config.WEATHER_API_KEY}`;

    fetch(API_ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
            let local_weather_data = data;
            CITY_NAME.textContent = local_weather_data.name;
            let weather_in_celsius = Math.round(
                local_weather_data.main.temp - 273
            );
            CITY_TEMP.textContent = weather_in_celsius;
            let WEATHER_ICON = local_weather_data.weather[0].icon
            image.setAttribute('src', `https://openweathermap.org/img/wn/${WEATHER_ICON}@2x.png`)
        });
}

const getZipCode = (e) => {
    e.preventDefault();
    let zipCode = input.value;
    console.log(zipCode);
    getWeatherData(zipCode);
}

btn.addEventListener("click", getZipCode);

form.reset();
input.focus();