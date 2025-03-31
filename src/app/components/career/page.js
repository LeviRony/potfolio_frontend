import React from 'react';
import styles from '../../aboutMe/page.module.css';

const events = [
  {
    title: 'Director of QA at Celsius Network',
    date: '2020 - 2025',
    description: 'Build a globally QA department, automation infrastructure & test, reports, quality process e2e',  },
  {
    title: 'Head od QA at Glassbox Digital',
    date: '2018 - 2020',
    description: 'Build and Manage the global QA department (Manual & Automation)',
  },
  {
    title: 'QA Team Manager at Mobilogy',
    date: '2017 - 2018',
    description: 'Leading the QA System level team for Content transfer data and diagnostic features on all platforms mobile, web, Windows (software & SAAS) hardware and servers.',
  },
  {
    title: 'QA Team Lead at Sirin Labs',
    date: '2014 - 2017',
    description: 'Leading end-to-end testing on custom Android OS, hardware upgrades over the air, encrypted calls, unique applications, and 3rd suppliers from all over the world',
  },
];

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <h3>My Career History</h3>
      <br></br>
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
