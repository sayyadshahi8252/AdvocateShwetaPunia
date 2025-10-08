import React from 'react';
import styles from './ContactSection.module.css';
import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const contactDetails = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    info: "+91 70117 43677",
    link: "tel:+917011743677"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    info: "puniashweta260@gmail.com",
    link: "mailto: puniashweta260@gmail.com"
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    info: "Connect for a quick chat",
    link: "https://wa.me/917011743677"
  },
  {
    icon: <FaClock />,
    title: "Office Hours",
    info: "Mon - Sat: 10:00 AM - 6:00 PM",
    link: "#" 
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className={styles.contactContainer}>
      <div className={styles.infoPanel}>
        <div className={styles.header}>
          <p className={styles.preHeading}>Contact Us</p>
          <h2 className={styles.mainHeading}>Get In Touch Today</h2>
          <p className={styles.subHeading}>
            Use the details below to reach out, or find our office location on the map.
          </p>
        </div>

        <div className={styles.addressBox}>
          <FaMapMarkerAlt className={styles.addressIcon} />
          <p className={styles.addressText}>
            Block I, Karampura West, New Delhi, Delhi, 110015
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {contactDetails.map((detail, index) => (
            <a key={index} href={detail.link} target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <div className={styles.iconWrapper}>{detail.icon}</div>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{detail.title}</h3>
                <p className={styles.cardInfo}>{detail.info}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.mapPanel}>
        <div className={styles.mapFrame}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8472311087107!2d77.13793247533675!3d28.664292575647497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d034330e04e55%3A0x9a7b03513ea69108!2sAdvocate%20Shweta%20Punia!5e0!3m2!1sen!2sin!4v1758305228321!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location of Advocate Shweta Punia"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
