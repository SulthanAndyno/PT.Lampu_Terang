import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <section id="contact" className={`${styles.contactBg} section`}>
      <div className="container">
        <h2 className="section-title">Hubungi Kami</h2>
        <p className={styles.subtitle}>
          Punya ide brilian? Mari wujudkan bersama.
        </p>
        <div>
            <a href="mailto:info@lamputerang.tech" className={styles.emailButton}>
                Email Kami Sekarang
            </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;  