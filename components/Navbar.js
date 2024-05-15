import Link from 'next/link';

import styles from 'styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <Link href="/">COCKTAILS</Link>
  </nav>
);

export default Navbar;
