import Image from "next/image";
import styles from "./page.module.css";
import { FaWhatsapp, FaLinkedin, FaPhone, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Home() {

  return (

    <div className={styles.page}>
      <div className={styles.welcome_container}>
        <h1>Welcome to Rony Levi First Website</h1>
        <p>I'm <strong>Rony Levi</strong>, a passionate developer who loves creating stunning websites with
          HTML, CSS, React, Java and JavaScript.</p>
        <p>Explore my portfolio, learn more about me, or get in touch!</p>
        <p>Feel free to reach out if you have any questions or want to collaborate on a project.</p>
        <p>Let's connect and create something amazing together!</p>
        <br></br>
        <p>Check out my social media profiles:</p>

        <div className={styles.contact_icons}>
        <a
          href="https://www.linkedin.com/in/rony-levi/"  // LinkedIn profile
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact via LinkedIn"
        >
          <FaLinkedin size={80} className={styles.FaLinkedin_icon} />
        </a>
        <a
          href="https://github.com/LeviRony"  // GitHub profile
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub"
        >
          <FaGithub size={80} className={styles.FaGithub_icon} />
        </a>
      </div>





      </div>

      <div id="bio" className={styles.bio}>
        <img src="/images/RonyL.jpeg" alt="Rony Levi" className={styles.img} />
        <h2>About Me</h2>
        <p>I started my career as a QA engineer, tested Web, Mobile, and Saas applications, for the last few years, I
          have built and led QA departments.</p>
        <p>My role encompasses establishing robust quality assurance protocols, (QA) infrastructures, automation,
          reports, and managing a talented team of over 50
          professionals worldwide. </p>
        <p>I have a lot of experience with CD/CD processes, work methods, management skills.</p>
      </div>
    </div>




  );
}
