"use client";
import React, { useEffect, useState } from "react";
import SkillLevel from "../skills/SkillsLevel";  

async function getSkills() {
    try {
        const response = await fetch('http://localhost:3001/api/skills/');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const skills = await response.json();
        return skills;
    } catch (error) {
        console.error("Error fetching skills:", error);
        return []; 
    }
}

const SkillsList = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const skillsData = await getSkills();
                setSkills(skillsData);
            } catch (error) {
                setError("Failed to load skills");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading skills...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {skills.length === 0 ? (
                <p>No skills available or error fetching skills.</p>
            ) : (
                skills.map((skill, index) => (
                    <SkillLevel
                        key={index}
                        skillName={skill.skill_name}
                        skillLevel={skill.skill_rating || 0} 
                    />
                ))
            )}
        </div>
    );
};

export default SkillsList;
