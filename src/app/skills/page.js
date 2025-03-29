import React from "react";
import SkillLevel from "../components/skills/SkillLevel";
import styles from './page.module.css';

const skills = [
  { skill: "JavaScript", level: 95 },
  { skill: "Java", level: 95 },
  { skill: "Python", level: 40 },
  { skill: "React.js", level: 85 },
  { skill: "Node.js", level: 85 },
  { skill: "HTML", level: 90 },
  { skill: "CSS", level: 85 },
  { skill: "Express.js", level: 85 },
  { skill: "MongoDB", level: 85 },
  { skill: "PostgreSQL", level: 85 },
  { skill: "REST APIs", level: 100 },
  { skill: "Next.js", level: 85 },
  { skill: "GitHub", level: 95 },
  { skill: "AWS", level: 75 },
  { skill: "CI/CD", level: 95 },
  { skill: "Jenkins", level: 100 },
  { skill: "Agile", level: 100 },
  { skill: "Scrum", level: 100 },
  { skill: "JIRA", level: 100 },
  { skill: "Monday.com", level: 60 },
  { skill: "Slack", level: 100 },
  { skill: "Auth0", level: 85 },
  { skill: "Google Cloud Platform", level: 75 },
  { skill: "Selenium", level: 100 },
  { skill: "Appium", level: 100 },
  { skill: "AI", level: 90 },


];

const Skills = () => {
  return (
    <div className={styles.title}>
      <h2>~ My Skills Level ~</h2>
    
    <div className={styles.skills_container}>
      {skills.map((item, index) => (
        <SkillLevel key={index} skill={item.skill} level={item.level} />
      ))}
    </div>
    </div>
  );
};

export default Skills;
