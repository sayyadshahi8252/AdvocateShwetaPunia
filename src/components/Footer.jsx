import React from 'react';
import styles from './Footer.module.css';
import { FaBalanceScale, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <a href="#" className={styles.footerLogo}>
            <FaBalanceScale />
            <span>Advocate Shweta Punia</span>
          </a>
          <p className={styles.footerAbout}>
            Providing dedicated and client-focused legal representation with a modern approach to justice.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#services">Practice Areas</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Practice Areas</h3>
          <ul className={styles.linkList}>
            <li><a href="#services">Civil Law</a></li>
            <li><a href="#services">Criminal Law</a></li>
            <li><a href="#services">Corporate Law</a></li>
            <li><a href="#services">Family Law</a></li>
            <li><a href="#services">Property Law</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Get In Touch</h3>
          <p className={styles.contactInfo}>
            3rd floor, I-42, Block I, Karampura West, New Delhi, 110015
          </p>
          <p className={styles.contactInfo}>
            <a href="mailto:puniashweta260@gmail.com"> puniashweta260@gmail.com</a>
          </p>
          <p className={styles.contactInfo}>
            <a href="tel:+917011743677">+91 70117 43677</a>
          </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Advocate Shweta Punia. All Rights Reserved.
        </p>
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/shwetapunia06021999/" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;