import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Important Links</a></li>
        <li><a href="#">Academics</a></li>
        <li><a href="#">Research</a></li>
        <li><a href="#">Photo Gallery</a></li>
        <li><a href="#">Student Corner</a></li>
        <li><a href="#">Library</a></li>
        <li><a href="#">Sports</a></li>
        <li><a href="#">College YouTube Channel</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
