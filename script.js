// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const apiKey = 'a11c7b9c19b328561e3b661c1d985c0f';
document.getElementById('fetchWeather').addEventListener('click', () => {
    const location = document.getElementById('location').value;

    // Make a GET request to the OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Extract and display the weather information
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});


