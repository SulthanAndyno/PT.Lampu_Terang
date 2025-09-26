import styles from './ServicesSection.module.css';

const services = [
    { icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v32c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64v-32c0-21.2 8.4-41.3 23.5-56.5S138.8 96 160 96h176zm-176-64c-44.2 0-80 35.8-80 80v32c0 53 43 96 96 96h112c53 0 96-43 96-96v-32c0-44.2-35.8-80-80-80H160zM256 320c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 112c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>, title: "IoT", desc: "Solusi cerdas untuk efisiensi dan kenyamanan hidup modern." },
    { icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>, title: "Website", desc: "Website profesional yang cepat, modern, dan responsif." },
    { icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>, title: "Aplikasi", desc: "Aplikasi mobile & desktop sesuai kebutuhan bisnis Anda." },
    { icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 224H16v64h480v-64zM16 352h480v-64H16v64zM496 96H16v64h480V96z"></path></svg>, title: "Jaringan", desc: "Instalasi dan optimasi jaringan untuk kecepatan dan keamanan." },
];

const ServicesSection = () => {
    return (
        <section id="services" className={`${styles.servicesBg} section`}>
            <div className="container">
                <h2 className="section-title">Layanan Unggulan Kami</h2>
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{service.icon}</div>
                            <h4>{service.title}</h4>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;