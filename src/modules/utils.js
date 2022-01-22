function kelvinToCelsius(temp) {
    return temp - 273.15;
}

function kelvinToFahrenheit(temp) {
    return (temp - 273.15) * (9 / 5) + 32;
}

export {
    kelvinToCelsius,
    kelvinToFahrenheit
}