import Link from 'next/link'
import styles from './Tag.module.css';

export default function Tag({ children, href }) {
    if (href) {
        return (
            <Link href={href} className={styles.tag}>
                {children}
            </Link>
        )
    }

    return (
        <span className={styles.tag}>
            {children}
        </span>
    )
}