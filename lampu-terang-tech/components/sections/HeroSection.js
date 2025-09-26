import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

const taglines = ["IoT Innovator", "Web Solution Builder", "Network Specialist", "App Creator"];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.heroContent}`}>
        <h1>Lampu Terang Tech</h1>
        <h2 key={index} className={styles.tagline}>
          {taglines[index]}
        </h2>
        <p>
          Membawa masa depan dengan inovasi IoT, Website, Jaringan, dan Aplikasi.
        </p>
        <div className={styles.ctaButtons}>
          <a href="#contact" className={styles.btnPrimary}>Get Consultation</a>
          <a href="#services" className={styles.btnSecondary}>See Our Work</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;