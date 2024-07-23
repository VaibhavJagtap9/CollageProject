import React from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src="/logo.jpg" alt="College Logo" className={styles.logo} />
        <div className={styles.titleContainer}>
          <h1 className={styles.headerTitle}>PROGRESSIVE EDUCATION SOCIETY'S</h1>
          <h2 className={styles.headerSubtitle}>MODERN COLLEGE OF ARTS, SCIENCE & COMMERCE (AUTONOMOUS)</h2>
          <p className={styles.headerText}>Ganeshkhind, Pune-16. | Affiliated to Savitribai Phule Pune University, Pune | Re-accredited by NAAC with A+ grade. | DST-FIST, DBT-STAR College</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
