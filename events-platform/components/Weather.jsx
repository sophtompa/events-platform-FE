import { useState } from "react";

const API_KEY="f77126a1d8a3ca3527d23ca70d556682"

function Weather({ location }) {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showWeather, setShowWeather] = useState(false);

    const handleWeatherClick = () => {
        
        if (weather) {
            setShowWeather((prev) => !prev);
            return;
        }

    setLoading(true);
    setError(null);

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${API_KEY}&units=metric`
    )
        .then((response) => {
        if (!response.ok) {
            throw new Error("Could not fetch weather");
        }
        return response.json();
        })
        .then((data) => {
        setShowWeather(true);
        setWeather(data);
        })
        .catch((err) => {
        setError(err.message);
        })
        .finally(() => {
        setLoading(false);
        });
    };

    const toggleWeather = () => {
        setShowWeather((prev) => !prev);
    };

    return (
        <div>
            <div className="button-group">
            <button className="weather-button" onClick={handleWeatherClick}>
            {showWeather ? "Hide Weather" : "Check Weather for " + location}
            </button>
            </div>

            {loading && <p>Loading weather...</p>}
            {error && <p>{error}</p>}

        {showWeather && weather && (
        <div>
            <p>
            <strong>{weather.name}</strong>: {weather.weather[0].description}
            </p>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Feels like: {weather.main.feels_like}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
        </div>
        )}
    </div>
    );
}

export default Weather;
