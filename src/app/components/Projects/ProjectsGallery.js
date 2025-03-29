"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link for navigation
import styles from "../../projects/page.module.css"; 

const projects = [
    { id: 1, title: "Weather App", category: "Web", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGZiZqMO6TK52gDcxWUhmBml5d_FGQ0YEMnCU33kz9n5V15B_JDvJLqIdIn5uZSQB9_Q&usqp=CAU", href: "/projects/Weather" },
    { id: 2, title: "Online Shop", category: "Web", image: "/ecommerce.jpg", href: "/projects/Shop" },
];

const categories = ["All", "Web", "Mobile", "AI"];

export default function ProjectsGallery() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = selectedCategory === "All" 
        ? projects 
        : projects.filter((p) => p.category === selectedCategory);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My Projects</h1>

            {/* Category Filter */}
            <div className={styles.filterButtons}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ""}`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className={styles.gallery}>
                {filteredProjects.map((project) => (
                    <Link key={project.id} href={project.href} className={styles.card}>
                        <div>
                            <img src={project.image} alt={project.title} className={styles.image} />
                            <div className={styles.overlay}>
                                <h3>{project.title}</h3>
                                <p>{project.category}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
