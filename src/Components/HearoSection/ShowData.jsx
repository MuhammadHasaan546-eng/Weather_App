import React from "react";
import {
  Sun,
  Thermometer,
  Droplets,
  Wind,
  CloudSun,
  MapPin,
  Globe2,
  Gauge,
  Eye,
  Clock,
} from "lucide-react";

export default function WeatherInfo({ info }) {
  const formatSunrise = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("en-PK", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getWeatherImage = (temp) => {
    if (temp >= 35)
      return "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    if (temp >= 25)
      return "https://images.unsplash.com/photo-1691422066850-de273fe9008d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    if (temp >= 15)
      return "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; //
    if (temp >= 5)
      return "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  };

  const weatherImage = getWeatherImage(info.tempature);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
      {}
      <div className="relative h-56 sm:h-72">
        <img
          src={weatherImage}
          alt="Weather condition"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <CloudSun className="text-yellow-300 w-8 h-8" />
            {info.city}, {info.country}
          </h2>
          <p className="text-lg font-medium mt-2">
            {info.weather_description || "Weather details"}
          </p>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-800 bg-gray-50">
        <div className="flex items-center gap-2">
          <Thermometer className="text-red-500" />
          <p>
            Temperature: <b>{info.tempature}°C</b>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Sun className="text-orange-400" />
          <p>
            Max Temp: <b>{info.tempature_max}°C</b>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <CloudSun className="text-blue-400" />
          <p>
            Min Temp: <b>{info.tempature_min}°C</b>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Gauge className="text-green-600" />
          <p>
            Feels Like: <b>{info.feels_like}°C</b>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Droplets className="text-blue-600" />
          <p>
            Humidity: <b>{info.humidity}%</b>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Wind className="text-gray-500" />
          <p>
            Pressure: <b>{info.pressure} hPa</b>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Eye className="text-indigo-500" />
          <p>
            Visibility: <b>{info.visibility} m</b>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="text-pink-500" />
          <p>
            Latitude: <b>{info.coord_lat}</b>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Globe2 className="text-green-600" />
          <p>
            Longitude: <b>{info.coord_lon}</b>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Sun className="text-yellow-500" />
          <p>
            Sunrise: <b>{formatSunrise(info.sunrise)}</b>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="text-gray-600" />
          <p>
            Timezone: <b>{info.timezone}</b>
          </p>
        </div>
      </div>

      <div className="py-4 text-center text-sm text-gray-500 bg-white">
        Last Updated: {new Date().toLocaleString()}
      </div>
    </div>
  );
}
