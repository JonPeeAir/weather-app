import "./styles.css";

import getWeatherDataForCity from "./modules/weather";
import { removeLoadingScreen, displayWeatherData } from "./modules/UI"

async function getUserCity() {
    const apiKey = "5b9df320-7b37-11ec-82b5-6b2da08c1dde";
    const response = await fetch(`http://api.freegeoip.app/json/?apikey=${apiKey}`, {mode: "cors"});
    const userCityData = await response.json();
    // console.log(userCityData);

    return userCityData.city;
}

async function displayUserWeather() {
    const userCity = await getUserCity();
    const userWeatherData = await getWeatherDataForCity(userCity);
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
displayUserWeather().catch(alert);
