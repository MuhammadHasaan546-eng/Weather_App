import { useState } from "react";
import WeatherSearch from "./WeatherSearch";
import ShowData from "./ShowData";

export default function WeatherApp() {
  const [weather, setWeather] = useState({
    tempature: 38,
    tempature_max: 40,
    tempature_min: 28,
    feels_like: 37,
    humidity: 55,
    pressure: 1010,
    visibility: 8000,
    coord_lat: 31.5204,
    coord_lon: 74.3587,
    city: "",
    country: "",
    sunrise: 1762998405,
    timezone: "Asia/Karachi",
    weather_description: "Hot and Sunny",
  });

  let updateWeather = (info) => {
    setWeather(info);
  };
  return (
    <div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-indigo-600 my-6">
        Weather App By Muhammad Hasaan
      </h1>
      <WeatherSearch updateWeather={updateWeather} />
      <ShowData info={weather} />
    </div>
  );
}
