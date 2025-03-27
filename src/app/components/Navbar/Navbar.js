import Link from 'next/link';
import styles from './Navbar.module.css';


export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <Link href="/" className={styles.link}>Home Page</Link>
                <Link href="/skills" className={styles.link}>Skills</Link>
                <Link href="/projects" className={styles.link}>Projects</Link>
                <Link href="/reviews" className={styles.link}>Reviews</Link>
                <Link href="/contact" className={styles.link}>Contact Me</Link>
            </div>
            <div className={styles.right}>
                <Link href="/cart" className={styles.link}>My Cart</Link>
            </div>
        </nav>
    );
}