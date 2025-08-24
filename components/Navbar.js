import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>SMM Panel</a>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/"><a>Beranda</a></Link></li>
        <li><Link href="/services"><a>Layanan</a></Link></li>
        <li><Link href="#"><a>Top-Up</a></Link></li>
        <li><Link href="#"><a>Login</a></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
