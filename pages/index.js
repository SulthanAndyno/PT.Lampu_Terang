import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import FoundersSection from '../components/sections/FoundersSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lampu Terang Tech - Solusi Teknologi Modern</title>
        <meta name="description" content="Inovasi IoT, Website, Jaringan, dan Aplikasi untuk masa depan." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FoundersSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}