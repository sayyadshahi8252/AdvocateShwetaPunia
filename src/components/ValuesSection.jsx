import React from 'react';
import styles from './ValuesSection.module.css';
import { FaAward, FaUsers, FaGavel } from 'react-icons/fa'; 

const valuesData = [
  {
    icon: <FaAward />,
    title: "Integrity",
    description: "Upholding the highest ethical standards in all legal proceedings"
  },
  {
    icon: <FaUsers />,
    title: "Client First",
    description: "Every decision is made with our client's best interests at heart"
  },
  {
    icon: <FaGavel />, 
    title: "Excellence",
    description: "Striving for the best possible outcomes in every case"
  }
];

const ValuesSection = () => {
  return (
    <section className={styles.valuesContainer}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.mainHeading}>Our Values & Philosophy</h2>
        <p className={styles.subHeading}>
          Every legal matter is approached with the highest standards of professionalism, ensuring
          our clients receive the best possible representation and outcomes.
        </p>

        <div className={styles.valuesGrid}>
          {valuesData.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.iconCircle}>
                {value.icon}
              </div>
              <h3 className={styles.cardTitle}>{value.title}</h3>
              <p className={styles.cardDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;