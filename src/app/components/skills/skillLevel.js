import React from "react";
import styles from "../../skills/page.module.css";

const SkillLevel = ({ skill, level }) => {
  return (
    <div className={styles.skillItem}>
      <span className={styles.skillName}>{skill}</span>
      <div className={styles.skillBar}>
        <div className={styles.skillFill} style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

export default SkillLevel;
