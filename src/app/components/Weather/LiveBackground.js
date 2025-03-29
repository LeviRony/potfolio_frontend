"use client";
import React, { useState, useEffect } from "react";
import styles from "../../projects/Weather/page.module.css"; 

export default function LiveBackground() {
    const [timeOfDay, setTimeOfDay] = useState("morning"); 

    useEffect(() => {
        const updateBackground = async () => {
            try {
                // Get user's location
                if ("geolocation" in navigator) {
                    navigator.geolocation.getCurrentPosition(async (position) => {
                        const { latitude, longitude } = position.coords;

                        // Fetch current time using TimeZone API
                        const response = await fetch(
                            `http://api.weatherapi.com/v1/current.json?key=5311018cb2814db8810195310252703&q=${lat},${lon}`
                        );
                        const data = await response.json();

                        const currentHour = new Date(data.formatted).getHours();

                        // Determine the time of day
                        if (currentHour >= 6 && currentHour < 12) {
                            setTimeOfDay("morning");
                        } else if (currentHour >= 12 && currentHour < 18) {
                            setTimeOfDay("afternoon");
                        } else if (currentHour >= 18 && currentHour < 21) {
                            setTimeOfDay("evening");
                        } else {
                            setTimeOfDay("night");
                        }
                    });
                } else {
                    console.log("Geolocation is not supported.");
                }
            } catch (error) {
                console.error("Error fetching timezone:", error);
            }
        };

        updateBackground();
    }, []);

    return (
        <div className={`${styles.background} ${styles[timeOfDay]}`}>
        </div>
    );
}
