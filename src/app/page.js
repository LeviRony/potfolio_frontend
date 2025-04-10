import Image from "next/image";
import styles from "./page.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.welcome_container}>
        <h1>Welcome to Rony Levi First Website</h1>
        <p>
          I'm <strong>Rony Levi</strong>, a passionate developer who loves
          creating stunning websites with HTML, CSS, React, Java and JavaScript.
        </p>
        <p>Explore my portfolio, learn more about me, or get in touch!</p>
        <p>
          Feel free to reach out if you have any questions or want to
          collaborate on a project.
        </p>
        <p>Let's connect and create something amazing together!</p>
        <br></br>
        <p>Check out my website, social media profiles:</p>
        <div className={styles.contact_icons}>
          <a
            href="https://www.linkedin.com/in/rony-levi/" // LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via LinkedIn"
          >
            <FaLinkedin size={80} className={styles.FaLinkedin_icon} />
          </a>
          <a
            href="https://github.com/LeviRony" // GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub"
          >
            <FaGithub size={80} className={styles.FaGithub_icon} />
          </a>
        </div>
      </div>
    </div>
  );
}
