import React, { useEffect, useState } from "react";
import SkillLevel from "../skills/SkillsLevel";  // Import SkillLevel component

async function getSkills() {
    const response = await fetch('http://localhost:3001/api/skills/');
    const skills = await response.json();
    return skills;
}

const SkillsList = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const skillsData = await getSkills();
            console.log(skillsData);  // Log to inspect the structure of the data
            setSkills(skillsData);
        };

        fetchData();
    }, []);

    return (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {
                skills.map((skill, index) => {
                    return (
                        <SkillLevel
                            key={index}
                            skillName={skill.skill_name}  // Pass skill_name correctly
                            skillLevel={skill.level_rate || 0}  // Use fallback if level_rate is undefined
                        />
                    );
                })
            }
        </div>
    );
};

export default SkillsList;
