import styles from "../page.module.css";
import Link from "next/link";
import Image from 'next/image'
import Tag from "@/components/Tag/Tag";
import { projets } from '../../lib/projets'

export default function Portfolio() {
  const projet = projets['portfolio']

  if (!projet) {
    return (
      <div className={styles.container}>
        <h1 className={`${styles.title} ${styles.centerText}`}>Projet non trouvé</h1>
        <p className={`${styles.contenu} ${styles.centerText}`}>Ce projet n'existe pas ou a été supprimé.</p>
        <Link href="/projets" className={styles.btnSecondary}>
          Retour aux projets
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} ${styles.centerText}`}>{projet.title}</h1>
      <p className={`${styles.contenu} ${styles.centerText}`}>{projet.description}</p>

      {projet.image ? (
        <div className={styles.imageWrapper}>
          <Image
            src={projet.image}
            alt={projet.title}
            width={1200}
            height={700}
            className={styles.projectImage}
            priority
          />
        </div>
      ) : (
        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>Image du projet</div>
        </div>
      )}

      <div className={styles.tagsContainer}>
        {projet.technologies.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>

      <div className={styles.links}>
        <a href={projet.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Voir le code
        </a>
        <a href={projet.demo} target="_blank" rel="noopener noreferrer" className={`${styles.link} ${styles.linkPrimary}`}>
          Voir la démo
        </a>
      </div>

      <Link href="/projets" className={styles.btnSecondary}>
        Retour aux projets
      </Link>
    </div>
  );
}
