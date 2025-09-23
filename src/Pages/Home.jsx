import React, { Suspense, lazy } from 'react'; 
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';


import heroBgImage from '../assets/herobkg.webp';
import professionalHeadshot from '../assets/image.webp';

import styles from './Home.module.css';


const AboutSection = lazy(() => import('../components/AboutSection'));
const ValuesSection = lazy(() => import('../components/ValuesSection'));
const PracticeAreas = lazy(() => import('../components/PracticeAreas'));
const ContactSection = lazy(() => import('../components/ContactSection'));
const Footer = lazy(() => import('../components/Footer'));

export default function Home() {
    return (
        <div>
            <Header advocateName="Advocate Shweta Punia" /> 

            <main className={styles.maincontent}>
               
                <HeroSection
                    advocateName="Shweta Punia"
                    backgroundImage={heroBgImage}
                />

                <Suspense fallback={<div className={styles.loadingFallback}>Loading...</div>}>
                    <AboutSection profileImage={professionalHeadshot} />
                    <ValuesSection />
                    <PracticeAreas />
                    <ContactSection />
                </Suspense>
            </main>

            <Suspense fallback={<div />}>
                <Footer />
            </Suspense>
        </div>
    );
}