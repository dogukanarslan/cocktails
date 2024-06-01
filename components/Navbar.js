import Link from 'next/link';

import styles from 'styles/Navbar.module.css';
import { Button } from './Button';

const Navbar = () => (
  <nav className={styles.navbar}>
    <Link href="/">COCKTAILS</Link>
    <ul className={styles.nav}>
      <li>
        <Link href="/search">Search</Link>
      </li>
      <li>
        <Link href="/random">Random</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
