import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillsNameLevel = ({ skillName, skillLevel }) => {
    return (
        <div style={{ width: 100, margin: "10px" }}>
            <CircularProgressbar
                value={skillLevel}
                text={`${skillLevel}%`}
                styles={buildStyles({
                    pathColor:
                        skillLevel >= 95
                            ? "rgb(104, 236, 67)"
                            : skillLevel > 75
                                ? "rgb(216, 244, 76)"
                                : skillLevel > 50
                                    ? "rgb(223, 170, 37)"
                                    : "rgb(247, 77, 47)",
                    textColor: "black",
                    trailColor: "#d6d6d6",
                })}
            />
            <p>{skillName}</p>
        </div>
    );
}

export default SkillsNameLevel;
