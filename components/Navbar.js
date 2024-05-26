import Link from 'next/link';

import styles from 'styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <Link href="/">COCKTAILS</Link>
    <ul className={styles.nav}>
      <li>
        <Link href="/search">Search</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
