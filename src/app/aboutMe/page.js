import styles from "./page.module.css";
import Timeline from "../../app/components/career/page";

export default function aboutMe() {
  return (
    <div className={styles.page}>
      <div className={styles.bio_container}>
        <div id="bio" className={styles.bio}>
          <img src="/images/RonyL.jpeg" alt="Rony Levi" className={styles.img} />
          <h1>About Me</h1>
          <p>I started my career as a QA engineer, tested Web, Mobile, and Saas applications, for the last few years, I
            have built and led QA departments.</p>
          <p>My role encompasses establishing robust quality assurance protocols, (QA) infrastructures, automation,
            reports, and managing a talented team of over 50
            professionals worldwide. </p>
          <p>I have a lot of experience with CD/CD processes, work methods, management skills.</p>

          <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
}

