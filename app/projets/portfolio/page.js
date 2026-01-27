import styles from "../page.module.css";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Portfolio Personnel</h1>
      <p className={styles.contenu}>
        Mon premier portfolio a été réalisé en juillet 2024 en seulement deux
        semaines, après avoir suivi une formation gratuite sur "Le Réacteur"
        (HTML, CSS, JavaScript). Depuis, je le mets à jour régulièrement pour
        y intégrer les nouvelles technologies et les projets réalisés durant
        ma formation chez Simplon à Clermont‑Ferrand. Cette page détaille les
        choix techniques, les étapes de réalisation et les améliorations
        successives apportées.
      </p>

      <Link href="/projets" className={styles.btnSecondary}>
        Retour aux projets
      </Link>
    </div>
  );
}
