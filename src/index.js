import "./styles.css";

import { getWeatherDataForCity, getWeatherDataForCoords } from "./modules/weather";
import { removeLoadingScreen, displayWeatherData } from "./modules/UI"

async function displayUserWeather(lat, lon) {
    const userWeatherData = await getWeatherDataForCoords(lat, lon);
    displayWeatherData(userWeatherData);
    removeLoadingScreen();
}

// Setup search bar
const form = document.getElementById("search-form");
form.onsubmit = async (event) => {
    const cityInput = document.getElementById("city-input");

    const weatherData = getWeatherDataForCity(cityInput.value);
    weatherData.then(data => {
        displayWeatherData(data)
        removeLoadingScreen();
    });

    event.preventDefault();
}

// Start by displaying user's weather
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
}

function success(pos) {
    const {coords} = pos;
    displayUserWeather(coords.latitude, coords.longitude);
}

function error(err) {
    // eslint-disable-next-line no-console
    console.error(`${err}\nUser declined location permission\nAttempting to load Toronto's weather instead`);

    const weatherData = getWeatherDataForCity("Toronto");
    weatherData.then(data => {
        displayWeatherData(data)
        removeLoadingScreen();
    });
}

navigator.geolocation.getCurrentPosition(success, error, options);
