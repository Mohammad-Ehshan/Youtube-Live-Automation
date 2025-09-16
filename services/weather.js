import fetch from "node-fetch";
import { config } from "../config.js";

export async function getWeather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.weatherApiKey}&units=metric`
    );
    const data = await res.json();

    if (data.cod !== 200) {
      return `Could not find weather for "${city}".`;
    }

    return `Weather in ${city}: ${data.main.temp}°C, ${data.weather[0].description}`;
  } catch (err) {
    return "Error fetching weather.";
  }
}