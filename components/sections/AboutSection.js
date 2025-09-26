import styles from './AboutSection.module.css';

const timelineData = [
    { year: "2020", title: "Pendirian Perusahaan", desc: "PT. Lampu Terang Tech didirikan dengan visi untuk menerangi dunia digital.", icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 32a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32V320h160a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32H320V32a32 32 0 0 0-32-32H32zm64 128h128a32 32 0 0 1 0 64H96a32 32 0 0 1 0-64z"></path></svg> },
    { year: "2021", title: "Proyek IoT Pertama", desc: "Berhasil meluncurkan solusi smart home, menandai langkah awal kami di dunia IoT.", icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 312c-11.4 0-22.1-3.9-30.8-10.4 3.5-9.2 6.8-18.9 9.1-28.9 4.3-18.7 8.3-37.8 11.1-57.5 1-7.2 1.4-14.5 1.4-21.8 0-23.3-19.1-42.2-42.5-42.2-12.7 0-24.4 5.6-32.3 14.5-8.3 9.4-13.4 22.1-13.4 35.9 0 11.2 3.6 21.7 9.8 30.5-5.3 5.4-11.2 10.2-17.6 14.4-17.3 11.4-37.3 17.9-58.5 17.9-52.1 0-94.5-42.4-94.5-94.5s42.4-94.5 94.5-94.5c44.5 0 82.1 31 92.2 71.4 12.1-10.4 27.6-16.7 44.5-16.7 34.6 0 62.6 28 62.6 62.6 0 8.3-1.6 16.3-4.7 23.5 11.1 28.5 22.1 57.3 22.1 86.8 0 8.7-1.1 17.2-3.1 25.3 10.6 6.5 17.6 18 17.6 31.2 0 19.3-15.7 35-35 35z"></path></svg> },
    { year: "2023", title: "Ekspansi Tim", desc: "Tim kami berkembang menjadi 20+ profesional di berbagai bidang teknologi.", icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32zm-256 0h-64c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32zm-256 0H64c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32z"></path></svg> },
    { year: "2025", title: "Peluncuran Global", desc: "Mulai melayani klien internasional dan membuka cabang di luar negeri.", icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505.1 19.1C503.8 7.9 493.3 0 482 0H30C18.7 0 8.2 7.9 6.9 19.1-1.3 33.3-3.6 51.5 7.4 62.6l103.1 103.1-103.1 103.1C-3.6 280.5-1.3 298.7 6.9 311.9c1.3 11.2 11.8 19.1 23.1 19.1H224v64H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64v-64h192c11.3 0 21.8-7.9 23.1-19.1 8.2-13.2 5.9-31.4-5.2-42.5L395.7 165.7l103.1-103.1c11.1-11.1 8.7-29.3-5.7-43.5zM224 224H30l103.1-103.1L224 224zm182.9-103.1L303.8 224H482L395.7 120.9l11.2-11.2z"></path></svg> },
];

const AboutSection = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">Perjalanan Kami</h2>
                <div className={styles.timelineContainer}>
                    {timelineData.map((item, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.timelineIcon}>{item.icon}</div>
                            <div className={styles.timelineContent}>
                                <span className={styles.timelineYear}>{item.year}</span>
                                <h3 className={styles.timelineTitle}>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;