import React, { useState } from "react";

export default function WeatherSearch({ updateWeather }) {
  const [city, setCity] = useState("");
  const [searchType, setSearchType] = useState("city");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "6d2ff99432c02174affd919c4b3e9e69";

  const getWeatherData = async () => {
    try {
      const getWeather =
        searchType === "zip"
          ? `${API_URL}?zip=${city}&appid=${API_KEY}&units=metric`
          : `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;

      const response = await fetch(getWeather);
      const jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        throw new Error(jsonResponse.message);
      }

      const result = {
        city: jsonResponse.name,
        tempature: jsonResponse.main.temp,
        tempature_max: jsonResponse.main.temp_max,
        tempature_min: jsonResponse.main.temp_min,
        coord_lat: jsonResponse.coord.lat,
        coord_lon: jsonResponse.coord.lon,
        feels_like: jsonResponse.main.feels_like,
        grnd_level: jsonResponse.main.grnd_level,
        humidity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure,
        sea_level: jsonResponse.main.sea_level,
        city_name: jsonResponse.name,
        country: jsonResponse.sys.country,
        sunrise: jsonResponse.sys.sunrise,
        sunset: jsonResponse.sys.sunset,
        timezone: jsonResponse.timezone,
        visibility: jsonResponse.visibility,
        weather_description: jsonResponse.weather[0].description,
      };

      return result;
    } catch (err) {
      console.error("Error fetching weather data:", err);
      throw err;
    }
  };

  const handleInput = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    setLoading(true);

    try {
      const info = await getWeatherData();
      updateWeather(info);
      setCity("");
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg mt-10">
      <h3 className="text-2xl font-bold text-center mb-4 text-indigo-600">
        &#127757; Weather Search
      </h3>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 items-center justify-center"
      >
        
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
        >
          <option value="city">City</option>
          <option value="zip">ZIP Code</option>
        </select>

        <input
          type="text"
          placeholder={
            searchType === "city"
              ? "Enter city name"
              : "Enter ZIP code (e.g. 90210)"
          }
          value={city}
          onChange={handleInput}
          required
          className="flex-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
        />

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition-all disabled:opacity-60"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

     
      {error && (
        <div className="mt-4 bg-red-100 text-red-800 border border-red-300 rounded-lg p-3 text-center">
          &#9888; No such place or ZIP code found!
        </div>
      )}
    </div>
  );
}
