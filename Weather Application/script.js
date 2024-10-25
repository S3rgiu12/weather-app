const apiKey = 'ZXZQAKWBM7ZFX472ZC89L7C6A'; // cheia API pentru Visual Crossing
const cityInput = document.querySelector('.city-input');
const cityName = document.querySelector('.city');
const tempElement = document.querySelector('.temp');
const dateElement = document.querySelector('.date');
const windElement = document.querySelector('.wind');
const humidityElement = document.querySelector('.humidity');

// Funcție pentru a obține datele meteo
async function getWeather(city) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;
    const response = await fetch(url);
    const data = await response.json();
    updateUI(data);
}

// Funcție pentru a actualiza UI-ul cu datele meteo
function updateUI(data) {
    const temperature = data.currentConditions.temp;
    const windSpeed = data.currentConditions.windspeed;
    const humidity = data.currentConditions.humidity;
    const weatherDescription = data.currentConditions.conditions;
    
    cityName.textContent = data.resolvedAddress;
    tempElement.textContent = Math.round(temperature);
    windElement.textContent = `${windSpeed} km/h`;
    humidityElement.textContent = `${humidity}%`;
    dateElement.textContent = new Date().toLocaleString();
}

// Adăugăm un event listener pentru schimbarea orașului selectat
cityInput.addEventListener('change', () => {
    const selectedCity = cityInput.value;
    getWeather(selectedCity);
});

// Pornim aplicația cu un oraș prestabilit (ex. Braila)
getWeather('Braila');
