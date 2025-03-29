"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./page.module.css";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // Get user's location and fetch weather data
  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=5311018cb2814db8810195310252703&q=${lat},${lon}`
        );
        setWeatherData(response.data);
      } catch (err) {
        setError("Unable to fetch weather data.");
        console.error(err);
      }
    };

    // Check if the browser supports geolocation
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (err) => {
          setError("Location permission denied or error.");
          console.error(err);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  // Show weather or error message
  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return <div>Loading weather...</div>;
  }

  return (
    <div>
      <h2 className={styles.weather_container_h2}>Weather Information</h2>
      <div>
        <h3 className={styles.weather_container_p}><strong>Current Location:</strong>{weatherData.location.name}</h3>
        <p className={styles.weather_container_p}><strong>Region:</strong>{weatherData.location.region}, {weatherData.location.country}</p>
        <p className={styles.weather_container_p}><strong>Local Time:</strong> {weatherData.location.localtime}°C</p>
        <p className={styles.weather_container_p}><strong>Temperature:</strong> {weatherData.current.temp_c}°C</p>
        <p className={styles.weather_container_p}><strong>Condition:</strong> {weatherData.current.condition.text}</p>
        <p className={styles.weather_container_p}><strong>Wind:</strong> {weatherData.current.wind_mph}</p>
        <p className={styles.weather_container_p}><strong>Uv:</strong> {weatherData.current.uv}</p>
        <p className={styles.weather_container_p}><strong>Humidity:</strong> {weatherData.current.humidity}</p>
        <p className={styles.weather_container_p}><strong>Feels Like:</strong> {weatherData.current.feelslike_c}°C</p>    
        <p className={styles.weather_container_p}><strong>Pressure:</strong> {weatherData.current.pressure_mb} mb</p>
        <p className={styles.weather_container_p}><strong>Visibility:</strong> {weatherData.current.vis_km} km</p>
        <p className={styles.weather_container_p}><strong>Cloud:</strong> {weatherData.current.cloud}</p>
        <p className={styles.weather_container_p}><strong>Wind Degree:</strong> {weatherData.current.wind_degree}</p>
        <p className={styles.weather_container_p}><strong>Wind Direction:</strong> {weatherData.current.wind_dir}</p>
        <p className={styles.weather_container_p}><strong>Last Updated:</strong> {weatherData.current.last_updated}</p>
        <img
          src={`https:${weatherData.current.condition.icon}`}
          alt={weatherData.current.condition.text}
        />
      </div>
    </div>
  );
};

export default Weather;
