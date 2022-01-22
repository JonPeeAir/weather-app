import { showLoadingScreen } from "./UI";

async function getWeatherDataForCity(city) {
    showLoadingScreen();
    const apiKey = "e4e929a7a1c99749d377df0b67d0d9c4";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, {mode: "cors"});
    const weatherData = await response.json();
    // console.log(weatherData);

    return weatherData;
}

async function getWeatherDataForCoords(lat, lon) {
    showLoadingScreen();
    const apiKey = "e4e929a7a1c99749d377df0b67d0d9c4";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`, {mode: "cors"});
    const weatherData = await response.json();
    // console.log(weatherData);

    return weatherData;
}

export {
    getWeatherDataForCity,
    getWeatherDataForCoords
}
