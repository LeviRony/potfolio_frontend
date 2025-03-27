import styles from './Social.module.css';
import { FaLinkedin } from "react-icons/fa"; 

function SocialLinks() {
  return (
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/rony-levi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} /> LinkedIn
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;