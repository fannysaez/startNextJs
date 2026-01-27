import styles from "./page.module.css";
import Link from "next/link";
import Tag from "@/components/Tag/Tag";
import { projets } from "../lib/projets";

export default function Projets() {
  const list = Object.values(projets);

  return (
    <>
      <div className={`${styles["projets-hero"]} ${styles.container}`}>
        <h1 className={styles.title}>Mes Projets</h1>
        <p className={styles.description}>
          Découvrez les projets sur lesquels j&apos;ai travaillé
        </p>
      </div>

      <div className={styles.grid}>
        {list.map((p) => (
          <Link key={p.slug} href={`/projets/${p.slug}`} className={styles.cardLink}>
            <div className={`${styles.card} ${styles.cardSecondary}`}>
              <h2>{p.title}</h2>
              <p className={`${styles.contenu} ${styles.cardDescription}`}>
                {p.description}
              </p>
              <div className={styles.tags}>
                {p.technologies && p.technologies.map((t, i) => (
                  <Tag key={i}>{t}</Tag>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
