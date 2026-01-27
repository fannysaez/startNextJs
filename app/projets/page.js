import styles from "./page.module.css";
import Link from "next/link";
import Tag from "@/components/Tag/Tag";

export default function Projects() {
  return (
    <>
      <div className={`${styles["projets-hero"]} ${styles.container}`}>
        <h1 className={styles.title}>Mes Projets</h1>
        <p className={styles.description}>
          Découvrez les projets sur lesquels j&apos;ai travaillé
        </p>
      </div>

      <div className={styles.grid}>
        <Link href="/projets/portfolio" className={styles.cardLink}>
          <div className={`${styles.card} ${styles.cardSecondary}`}>
            <h2>1er Portfolio</h2>
            <p className={`${styles.contenu} ${styles.cardDescription}`}>
              Mon premier portfolio, réalisé en deux semaines en juillet 2024,
              est né après avoir suivi une formation gratuite sur "Le Réacteur".
              Je l'enrichis depuis lors avec chaque nouvelle technologie et
              projet découverts pendant ma formation chez Simplon à
              Clermont-Ferrand.
            </p>
            <div className={styles.tags}>
              <Tag>HTML5</Tag>
              <Tag>CSS3</Tag>
              <Tag>JavaScript</Tag>
            </div>
          </div>
        </Link>

        <div className={`${styles.card} ${styles.cardSecondary}`}>
          <h2>CV en ligne</h2>
          <p className={`${styles.contenu} ${styles.cardDescription}`}>
            Création de mon cv interactif en ligne, développé en HTML, CSS et
            JavaScript. Ce projet vise à présenter mon parcours professionnel,
            mes compétences ainsi que différents projets réalisés en
            autodidacte, de manière dynamique et attrayante, durant ma formation
            de DWWM à Simplon de 10 mois.
          </p>
          <div className={styles.tags}>
            <Tag>HTML5</Tag>
            <Tag>CSS3</Tag>
            <Tag>JavaScript</Tag>
          </div>
        </div>

        <div className={`${styles.card} ${styles.cardSecondary}`}>
          <h2>App Bien-être & Formations</h2>
          <p className={`${styles.contenu} ${styles.cardDescription}`}>
            Projet Final réalisé lors de mon stage de 10 semaines en Freelance
            dans le cadre de la formation 'DWWM', à Simplon Clermont-Ferrand
            (63) pour le Titre Professionnel de Développeuse Web & Web Mobile
            (RNCP) obtenu le 20 Octobre 2025, équivalent d'un Bac+2 ~ BTS
          </p>
          <div className={styles.tags}>
            <Tag>Next.js</Tag>
            <Tag>Markdown</Tag>
            <Tag>SEO</Tag>
          </div>
        </div>
      </div>
    </>
  );
}
