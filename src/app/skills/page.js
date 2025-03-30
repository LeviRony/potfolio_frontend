"use client";
import React from "react";
import "react-circular-progressbar/dist/styles.css";
import styles from "./page.module.css";
import SkillsList from "../components/skills/SkillsList";  // Correct import

const Skills = () => {
    return (
        <div className={styles.title}>
            <h2>~ My Skills Level ~</h2>
            <div className={styles.skills_container}>
                <SkillsList />
            </div>
        </div>
    );
};

export default Skills;
