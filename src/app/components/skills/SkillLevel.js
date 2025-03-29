"use client"; 
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "../../skills/page.module.css";

const SkillLevel = ({ skill, level }) => {
  return (
    <div style={{ width: 100, margin: "10px" }}>
      <CircularProgressbar
        value={level}
        text={`${level}%`}
        styles={buildStyles({
          pathColor: level >= 95 ? "rgb(104, 236, 67)" : level > 75 ? "rgb(216, 244, 76)" : level > 50 ? "rgb(223, 170, 37)" :  "rgb(247, 77, 47)",
          textColor: "black",
          trailColor: "#d6d6d6", 
        })}
      />
      <p>{skill}</p>
    </div>
  );
};

export default SkillLevel;
