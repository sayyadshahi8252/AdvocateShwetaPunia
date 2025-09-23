import React from 'react';
import styles from './AboutSection.module.css';
import { FaGavel, FaHandshake, FaLightbulb } from 'react-icons/fa';

const AboutSection = ({ profileImage }) => {
  const handleConsultation = () => {
  window.location.href = "https://wa.me/917011743677";
};

  return (
    <section id="about" className={styles.aboutContainer}>
      <div className={styles.aboutContent}>

        {profileImage && (
          <div className={styles.imageContainer}>
            <img src={profileImage} alt="Advocate Shweta Punia" className={styles.profileImage} />
          </div>
        )}

        <div className={styles.textContainer}>
          <p className={styles.preHeading}>About Me</p>
          <h2 className={styles.mainHeading}>A Modern Approach to Justice, A Personal Commitment to You</h2>
          <p className={styles.bio}>
            I am Advocate Shweta Punia, a dedicated legal professional driven by a passion for justice and the belief that every client deserves clear, effective, and accessible legal representation. In a complex legal world, my mission is to be your trusted guide, offering a fresh perspective and unwavering support through every step of your legal journey.
          </p>
          <div className={styles.philosophyList}>
            <div className={styles.philosophyItem}>
              <FaHandshake className={styles.icon} />
              <div>
                <h3>Client-Centric Approach</h3>
                <p>Your case is unique, and so is my strategy. I prioritize listening to your story and understanding your goals to provide personalized and effective legal solutions.</p>
              </div>
            </div>
            <div className={styles.philosophyItem}>
              <FaLightbulb className={styles.icon} />
              <div>
                <h3>Modern & Efficient</h3>
                <p>Leveraging modern tools and communication methods, I ensure you are always informed and that your case is handled with maximum efficiency and transparency.</p>
              </div>
            </div>
            <div className={styles.philosophyItem}>
              <FaGavel className={styles.icon} />
              <div>
                <h3>Unwavering Dedication</h3>
                <p>As a driven advocate, I bring vigor, tenacity, and a meticulous eye for detail to every case I handle, ensuring your rights are protected with the utmost commitment.</p>
              </div>
            </div>
          </div>
          <button className={styles.consultationButton} onClick={handleConsultation}>Schedule a Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;