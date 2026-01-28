import Link from 'next/link'
import styles from './page.module.css'

export default function NotFound() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroSubtitle}>404 — Page non trouvée</h1>
        <p className={styles.heroDescription}>
          Désolé, la page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className={styles.heroButtons}>
          <Link href="/" className={`${styles.btn} ${styles.btnPrimary}`}>
            Retour à l'accueil
          </Link>
          <Link href="/contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            Contactez-moi
          </Link>
        </div>
      </div>
    </section>
  )
}
