import styles from "./ExperienceLevels.module.css";

const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "CSS", level: 80 },
    { name: "Testing (Jest, Cypress)", level: 70 },
  ];

export default function Skills() {
    return (
        <div className={styles.container}>
          <title>📞 Contact Me</title>
            <h1 className={styles.title}>Welcome to my skills Page</h1>
            <p>Here are my skill levels in various technologies.</p>

         <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
         <h2 className="text-2xl font-bold mb-4 text-center">My Skill Levels</h2>
         {skills.map((skill, index) => (
           <div key={index} className="mb-4">
             <p className="text-lg font-semibold">{skill.name}</p>
             <div className="w-full bg-gray-700 rounded-full h-5">
               <div
                 className="bg-blue-500 h-5 rounded-full text-right pr-2 text-sm font-bold transition-all duration-1000 ease-in-out"
                 style={{ width: `${skill.level}%` }}
               >
                 {skill.level}%
               </div>
             </div>
           </div>
         ))}
       </div>
        </div>
    );
}
