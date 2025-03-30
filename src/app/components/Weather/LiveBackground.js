"use client";
import React, { useState, useEffect } from "react";
import styles from "../../projects/Weather/page.module.css";

export default function LiveBackground() {
    const [timeOfDay, setTimeOfDay] = useState("morning"); // Default morning

    useEffect(() => {
        const updateBackground = async () => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        try {
                            const response = await fetch(
                                `https://api.weatherapi.com/v1/current.json?key=5311018cb2814db8810195310252703&q=${latitude},${longitude}`
                            );
                            const data = await response.json();

                            if (data.location && data.location.localtime) {
                                const currentHour = new Date(data.location.localtime).getHours();

                                if (currentHour >= 6 && currentHour < 12) {
                                    setTimeOfDay("morning");
                                } else if (currentHour >= 12 && currentHour < 18) {
                                    setTimeOfDay("afternoon");
                                } else if (currentHour >= 18 && currentHour < 21) {
                                    setTimeOfDay("evening");
                                } else {
                                    setTimeOfDay("night");
                                }
                            }
                        } catch (error) {
                            console.error("Error fetching timezone:", error);
                            setTimeOfDay("morning"); // Default fallback
                        }
                    },
                    (error) => {
                        console.error("Geolocation error:", error);
                        setTimeOfDay("morning"); // Default fallback
                    }
                );
            } else {
                setTimeOfDay("morning"); // Default fallback
            }
        };

        updateBackground();
    }, []);

    return (
        <div className={`${styles.background} ${styles[timeOfDay] || ''}`}>
        </div>
    );
}
