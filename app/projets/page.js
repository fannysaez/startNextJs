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
          <h2>App E-commerce</h2>
          <p>Application de vente en ligne avec panier</p>
          <div className={styles.tags}>
            <Tag>React</Tag>
            <Tag>Node.js</Tag>
            <Tag>MongoDB</Tag>
          </div>
        </div>

        <div className={`${styles.card} ${styles.cardSecondary}`}>
          <h2>Blog Technique</h2>
          <p>Blog personnel sur le développement web</p>
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
