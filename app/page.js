import Image from "next/image";
import styles from "./page.module.css";
import Tag from "@/components/Tag/Tag";

const skills = ["React", "Node.js", "Next.js", "JavaScript", "Modules CSS"];

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.heroSubtitle}>
          Développeuse Web Full-Stack
        </p>
        <p className={styles.heroDescription}>
          Je crée des applications web modernes, performantes et accessibles, en
          alliant technique, design et expérience utilisateur.
        </p>
        <div className={styles.heroButtons}>
          <a href="/projets" className={`${styles.btn} ${styles.btnPrimary}`}>
            Voir mes projets
          </a>
          <a href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            Me contacter
          </a>
        </div>
        <div className={styles.tagsContainer}>
          {skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
