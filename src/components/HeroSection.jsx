import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import styles from './HeroSection.module.css';

const HeroSection = ({
    advocateName = "Shweta Punia", 
    experience = "1.5 Years Experience",
    fresherStatus = "Eager to Grow",
    casesWon = "50+",
    support = "24/7 Support",
    areasOfExpertise = [ "Civil Law", "Criminal Law", "Corporate Law", "Family Law", "Property Law" ],
    phoneNumber = "+91 70117 43677",
    email = " puniashweta260@gmail.com",
    location = "Delhi NCR, India",
    backgroundImage
}) => {
    return (
        <section id='hero' className={styles.heroContainer} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.overlay}></div>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <p className={styles.preHeading}>Professional Legal Services</p>

                    <h1 className={styles.advocateName}>
                        Advocate <span className={styles.punia}>{advocateName}</span>
                    </h1>

                    <p className={styles.description}>
                        Experienced legal advocate providing comprehensive legal services with expertise in
                        civil, criminal, and corporate law. Your trusted partner for professional legal representation.
                    </p>

                    <div className={styles.ctaButtons}>
                        <button className={styles.scheduleButton} onClick={()=>{ window.location.href = "https://wa.me/917011743677";}}>Schedule Consultation</button>
                        <button className={styles.learnMoreButton} >Learn More</button>
                    </div>

                    <div className={styles.contactInfo}>
                        <span><FaPhoneAlt /> {phoneNumber}</span>
                        <span><FaEnvelope /> {email}</span>
                        <span><FaMapMarkerAlt /> {location}</span>
                    </div>
                </div>

                <div className={styles.heroRight}>
                    <div className={styles.statsCard}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>~{experience}</span>
                            <span className={styles.statLabel}>Experience</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>{casesWon}</span>
                            <span className={styles.statLabel}>Cases Handled</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>{fresherStatus}</span>
                            <span className={styles.statLabel}>Commitment</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>{support}</span>
                            <span className={styles.statLabel}>Dedicated Support</span>
                        </div>
                    </div>

                    <div className={styles.expertiseSection}>
                        <h3 className={styles.expertiseHeading}>Areas of Expertise</h3>
                        <div className={styles.expertiseTags}>
                            {areasOfExpertise.map((area, index) => (
                                <span key={index} className={styles.expertiseTag}>{area}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
