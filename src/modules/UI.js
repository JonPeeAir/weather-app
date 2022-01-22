import { kelvinToCelsius } from "./utils";

function showLoadingScreen() {
    const loadingText = document.getElementById("loading");
    loadingText.style.display = "block";

    const weatherDisplay = document.getElementById("weather-data");
    weatherDisplay.style.opacity = "0";
}

function removeLoadingScreen() {
    const loadingText = document.getElementById("loading");
    loadingText.style.display = "none";

    const weatherDisplay = document.getElementById("weather-data");
    weatherDisplay.style.opacity = "1";
}

function displayWeatherData(weatherData) {
    document.getElementById("city").textContent = weatherData.name;
    document.getElementById("temp").textContent = kelvinToCelsius(weatherData.main.temp).toFixed(2);
    document.getElementById("temp-high").textContent = kelvinToCelsius(weatherData.main.temp_max).toFixed(2);
    document.getElementById("temp-low").textContent = kelvinToCelsius(weatherData.main.temp_min).toFixed(2);
    document.getElementById("feels-like").textContent = kelvinToCelsius(weatherData.main.feels_like).toFixed(2);
    document.getElementById("pressure").textContent = weatherData.main.pressure;
    document.getElementById("humidity").textContent = weatherData.main.humidity;
}

export {
    showLoadingScreen,
    removeLoadingScreen,
    displayWeatherData
}