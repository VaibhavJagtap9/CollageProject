// components/Footer.tsx

import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h2 className={styles.heading}>CONTACT US</h2>
          <address className={styles.address}>
            PROGRESSIVE EDUCATION SOCIETY'S<br />
            MODERN COLLEGE OF ARTS, SCIENCE & COMMERCE (AUTONOMOUS)<br />
            Ganeshkhind. Pune-16.<br />
            PU / PN /ASC / 089 (1992)
          </address>
        </div>
        <div className={styles.contactDetails}>
          <p className={styles.email}>
            e-Mail: <a href="mailto:moderncollege16@gmail.com">moderncollege16@gmail.com</a>
          </p>
          <p className={styles.phone}>
            Mobile: 7768050797 / 7768020797
          </p>
        </div>
        <div className={styles.copyright}>
          <p>Copyright © 2024 all rights reserved.</p>
          <p>
            <a href="http://tridentwebinfoservices.com" target="_blank" rel="noopener noreferrer">
              Responsive web site design
            </a> by Computer Science Department
          </p>
          <p>Visitor's Count: 0</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
