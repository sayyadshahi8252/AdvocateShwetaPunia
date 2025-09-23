import React, { useState } from 'react';
import { FaBalanceScale } from 'react-icons/fa'; 
import styles from './Header.module.css';
import { Link } from 'react-scroll';

const Header = ({ advocateName = "Advocate Punia" }) => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.navbar}>
            <div className={styles.navSection}>
                <a href="#" className={styles.navbarLogo}>
                    <FaBalanceScale className={styles.logoIcon} />
                    <span className={styles.logoText}>{advocateName}</span>
                </a>
            </div>
            <nav className={`${styles.navSection} ${styles.navMenu} ${isMenuOpen ? styles.navMenuActive : ''}`}>
                <ul className={styles.navLinks}>
                    <li>
                        <Link to="hero" spy={true} smooth={true} offset={-80} duration={500} onClick={toggleMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={-80} duration={500} onClick={toggleMenu}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="services" spy={true} smooth={true} offset={-80} duration={500} onClick={toggleMenu}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={-80} duration={500} onClick={toggleMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={`${styles.navSection} ${styles.navAction}`}>
                <div
                    className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </div>
        </header>
    );
};

export default Header;