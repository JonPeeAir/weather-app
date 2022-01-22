import "./styles.css";

function kelvinToCelsius(temp) {
    return temp - 273.15;
}

function kelvinToFahrenheit(temp) {
    return (temp - 273.15) * (9 / 5) + 32;
}

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

async function getWeatherDataForCity(city) {
    showLoadingScreen();

    const apiKey = "e4e929a7a1c99749d377df0b67d0d9c4";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const weatherData = await response.json();
    console.log(weatherData);

    return weatherData;
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


const form = document.getElementById("search-form");
form.onsubmit = () => {
    const cityInput = document.getElementById("city-input");

    const weatherData = getWeatherDataForCity(cityInput.value);
    weatherData.then(data => {
        displayWeatherData(data)
        removeLoadingScreen();
    });

    return false;
}


getWeatherDataForCity("paranaque").then(data => {
    displayWeatherData(data)
    removeLoadingScreen();
});
