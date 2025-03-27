
import React from "react";
import { FaWhatsapp, FaLinkedin, FaPhone, FaGithub, FaEnvelope } from 'react-icons/fa';
import styles from "./page.module.css";

const ContactMe = () => {
  return (
    <div className={styles.contact_me_container}>
      <h2>Contact Me</h2>
      <div className={styles.contact_icons}>
        {/* Phone */}
        <a
          href="tel:+972544273287" // phone number
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contact via Phone"
        >
          <FaPhone size={80} className={styles.icon} />
        </a>
        <a
          href="https://wa.me/972544273287"  //  WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact via WhatsApp"
        >
          <FaWhatsapp size={80} className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/rony-levi/"  // LinkedIn profile
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact via LinkedIn"
        >
          <FaLinkedin size={80} className={styles.icon} />
        </a>
        <a
          href="https://github.com/LeviRony"  // GitHub profile
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub"
        >
          <FaGithub size={80} className={styles.icon} />
        </a>
        <a
          href="mailto:ronylevi99@gmail.com"  // email address
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact via Email"
        >
          <FaEnvelope size={80} className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;




