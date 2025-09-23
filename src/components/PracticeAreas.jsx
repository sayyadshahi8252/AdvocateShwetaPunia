import React from 'react';
import styles from './PracticeAreas.module.css';
import { FaLandmark, FaBalanceScale, FaBuilding, FaUsers, FaHome, FaBriefcase } from 'react-icons/fa';


const practiceAreasData = [
  {
    icon: <FaBalanceScale />,
    title: "Civil Law",
    description: "Expert representation in disputes between individuals or organizations, including contracts and torts."
  },
  {
    icon: <FaLandmark />,
    title: "Criminal Law",
    description: "Dedicated defense for individuals facing criminal charges, ensuring a fair legal process and protection of rights."
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Law",
    description: "Advising businesses on formation, governance, compliance, and mergers to ensure legal soundness."
  },
  {
    icon: <FaUsers />,
    title: "Family Law",
    description: "Compassionate guidance through sensitive family matters, including divorce, custody, and adoption."
  },
  {
    icon: <FaHome />,
    title: "Property Law",
    description: "Handling all aspects of real estate transactions and property disputes with meticulous attention to detail."
  },
  {
    icon: <FaBriefcase />,
    title: "Litigation",
    description: "Strategic advocacy and representation in court proceedings to resolve complex legal conflicts effectively."
  }
];

const PracticeAreas = () => {
  return (
   
    <section id="services" className={styles.practiceContainer}>
      <div className={styles.contentWrapper}>
        <p className={styles.preHeading}>Our Services</p>
        <h2 className={styles.mainHeading}>Areas of Expertise</h2>
        <p className={styles.subHeading}>
          Committed to providing exceptional legal support across a wide range of practice areas.
        </p>

        <div className={styles.areasGrid}>
          {practiceAreasData.map((area, index) => (
            <div key={index} className={styles.areaCard}>
              <div className={styles.iconWrapper}>
                {area.icon}
              </div>
              <h3 className={styles.cardTitle}>{area.title}</h3>
              <p className={styles.cardDescription}>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;