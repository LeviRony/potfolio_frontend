"use client"; // Mark this as a Client Component (for Next.js)

import React, { useEffect, useState } from "react";
import styles from "../../projects/page.module.css";

const ProjectsGallery = () => {
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [repos, setRepos] = useState([]);
    const githubUsername = "LeviRony";

    const projects = [
        {
            id: 1,
            title: "Weather App",
            category: "Web",
            image: "https://play-lh.googleusercontent.com/pCQw51XRP4UPr-FCYDjvNnEpFa0HDGJjjLDldN3rmw4KkwhqPu0PZXE8EopmAxzH9mQ",
            href: "/projects/Weather",
        },
        {
            id: 2,
            title: "Online Shop",
            category: "Web",
            image: "./images/shop.png",
            href: "/projects/Shop",
        },
        {
            id: 3,
            title: "Online Shop",
            category: "SERVER",
            image: "./images/server.webp",
            href: "https://github.com/LeviRony/RestAPI",
        },
        {
            id: 4,
            title: "Auth0 Login",
            category: "Web",
            image: "https://auth0.com/docs/media/quickstarts/universal-login.png",
            href: "/projects/Shop",
        },
        {
            id: 5,
            title: "Personal Website",
            category: "SERVER",
            image: "./images/server.webp",
            href: "https://github.com/LeviRony/potfolio_backend",
        },
        {
            id: 6,
            title: "Personal Website",
            category: "Web",
            image: "./images/personalWeb.png",
            href: "https://github.com/LeviRony/potfolio_backend",
        },
    ];


    const allProjects = [...projects, ...repos];
    const categories = ["ALL", "Web", "Mobile", "SERVER"];

    const filteredProjects =
        selectedCategory === "ALL"
            ? allProjects
            : allProjects.filter(project => project.category.toLowerCase() === selectedCategory.toLowerCase());

            return (
                <div className={styles.container}>
                    <h2 className={styles.title}>{githubUsername}'s Projects</h2>
        
                    {/* Filter Buttons */}
                    <div className={styles.filters}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ""}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
        
                    {/* Project Grid */}
                    <div className={styles.gallery}>
                        {filteredProjects.map((project) => (
                            <div key={project.id} className={styles.card}>
                                <a href={project.href} target="_blank" rel="noopener noreferrer">
                                    <img src={project.image} alt={project.title} className={styles.image} />
                                    <div className={styles.overlay}>
                                        <h3>{project.title}</h3>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            );
        };
        
        export default ProjectsGallery;