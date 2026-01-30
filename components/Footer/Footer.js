import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from "./Footer.module.css";

export default function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} Fanny SAEZ.</p>
        <p className={styles.links}>
          <a href="https://github.com/fannysaez" target="_blank" rel="noopener noreferrer">
            <FaGithub  />
          </a>
          <a href="https://www.linkedin.com/in/fannysaez/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </p>
      </div>
    </footer>
  );
}