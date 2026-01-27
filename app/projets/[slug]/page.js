import styles from './page.module.css'
import Link from 'next/link'
import { projets } from '../../lib/projets'

export default function ProjetDetail({ params }) {
  const { slug } = params
  const projet = projets[slug]

  if (!projet) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Projet non trouvé</h1>
        <p className={`${styles.contenu} ${styles.centerText}`}>Ce projet n'existe pas ou a été supprimé.</p>
        <Link href="/projets" className={styles.btnSecondary}>
          Retour aux projets
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={`${styles.title} ${styles.centerText}`}>{projet.title}</h1>
        <p className={`${styles.contenu} ${styles.centerText}`}>{projet.description}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>Image du projet</div>
        </div>

        <div className={styles.details}>
          <h2>Technologies utilisées</h2>
          <div className={styles.technologies}>
            {projet.technologies.map((tech, idx) => (
              <span key={idx} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.links}>
            <a
              href={projet.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Voir le code →
            </a>
            <a
              href={projet.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} ${styles.linkPrimary}`}
            >
              Voir la démo →
            </a>
          </div>
        </div>
      </div>

      <Link href="/projets" className={styles.btnSecondary}>
        Retour aux projets
      </Link>
    </div>
  )
}
