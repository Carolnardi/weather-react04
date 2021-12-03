import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [weather, setWeather] = useState({});

  function handleSearch(event) {
    event.preventDefault();

    let apikey = "56723cac732ebbf7ba15a7ae4506313e";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}`;

    axios.get(apiUrl).then(showTemperature);
  }

  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidiy: response.data.main.humidiy,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSearch}>
      <input type="Search" placeholder="Type a City" onChange={changeCity} />
      <button type="submit"> Search </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Win: {weather.wind}km/h</li>
          <li>Humidiy:{weather.humidiy}%</li>
          <li>
            <img src={weather.icon} alt="weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
