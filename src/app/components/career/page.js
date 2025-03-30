import React from 'react';
import styles from '../../aboutMe/page.module.css';

const events = [
  {
    title: 'Director of QA at Celsius Network',
    date: '2020 - 2025',
    description: 'Developed and maintained web applications using React and Node.js.',
  },
  {
    title: 'Frontend Developer at XYZ Ltd',
    date: '2020 - 2022',
    description: 'Built responsive UIs using React, Redux, and integrated REST APIs.',
  },
  {
    title: 'Bachelor in Computer Science',
    date: '2016 - 2020',
    description: 'Graduated with honors in Computer Science from University XYZ.',
  },
];

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      {events.map((event, index) => (
        <div key={index} className={styles.timeline_event}>
          <div className={styles.timeline_content}>
            <h3 className={styles.title}>{event.title}</h3>
            <span className={styles.date}>{event.date}</span>
            <p className={styles.description}>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
