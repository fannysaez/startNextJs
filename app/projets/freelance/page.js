import styles from '../page.module.css'
import Link from 'next/link'
import { projets } from '../../lib/projets'

export default function Freelance() {
	const projet = projets['freelance']

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
			<div className={styles.technologies}>
				{projet.technologies.map((t, i) => (
					<span key={i} className={styles.tech}>{t}</span>
				))}
			</div>
			<div style={{marginTop: '1.25rem'}}>
				<a href={projet.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
					Voir le code →
				</a>
				<a href={projet.demo} target="_blank" rel="noopener noreferrer" className={`${styles.link} ${styles.linkPrimary}`} style={{marginLeft: '0.75rem'}}>
					Voir la démo →
				</a>
			</div>

			<Link href="/projets" className={styles.btnSecondary}>
				Retour aux projets
			</Link>
		</div>
	)
}

