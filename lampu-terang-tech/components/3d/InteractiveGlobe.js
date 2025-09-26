import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

// Komponen 3D untuk Globe
function Globe() {
  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial color="#456882" wireframe />
    </mesh>
  );
}

const taglines = ["IoT Innovator", "Web Solution Builder", "Network Specialist", "App Creator"];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.webglBackground}>
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
            <Globe />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className={`container ${styles.heroContent}`}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Lampu Terang Tech
        </motion.h1>
        <motion.h2
          key={taglines[index]} // Kunci untuk memicu animasi saat teks berubah
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {taglines[index]}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Menerangi dunia digital Anda dengan solusi terbaik dan terpercaya.
        </motion.p>
        <motion.div
          className={styles.ctaButtons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="#contact" className={styles.btnPrimary}>Get Consultation</a>
          <a href="#portfolio" className={styles.btnSecondary}>See Our Work</a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;