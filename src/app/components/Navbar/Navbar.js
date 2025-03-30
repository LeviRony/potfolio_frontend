"use client";
import Link from 'next/link';
import styles from './Navbar.module.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Navbar() {
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
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <Link href="/" className={styles.link}>Home Page</Link>
                <Link href="/aboutMe" className={styles.link}>About Me</Link>
                <Link href="/skills" className={styles.link}>Skills</Link>
                <Link href="/projects" className={styles.link}>Projects</Link>
                <Link href="/reviews" className={styles.link}>Reviews</Link>
                <Link href="/contact" className={styles.link}>Contact Me</Link>
            </div>
            <div className={styles.right}>
                <a>{weatherData.location.name} {weatherData.current.temp_c}°C</a>

            </div>
        </nav>
    );
}