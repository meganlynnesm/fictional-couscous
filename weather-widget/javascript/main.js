console.log("This works");

const config = {
    WEATHER_API_KEY: "8fa484ce9c89dba29bf695f05ec131b8"
};

const WEATHER_API_KEY = config.WEATHER_API_KEY;

let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");

getWeatherData = (zip) => {
    let API_KEY = config.WEATHER_API_KEY;
    let API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${config.WEATHER_API_KEY}`;

    fetch(API_ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
            let local_weather_data = data;
                console.log(local_weather_data)
        })
}

function getZipCode(e) {
    e.preventDefault();
    let zipCode = input.value;
    console.log(zipCode);
    getWeatherData(zipCode);
}

btn.addEventListener("click", getZipCode);
