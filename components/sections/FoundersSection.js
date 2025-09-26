import Image from 'next/image';
import styles from './FoundersSection.module.css';

const founders = [
    { name: 'Founder 1', role: 'CEO', img: 'https://via.placeholder.com/250' },
    { name: 'Founder 2', role: 'CTO', img: 'https://via.placeholder.com/250' },
    { name: 'Founder 3', role: 'COO', img: 'https://via.placeholder.com/250' },
    { name: 'Founder 4', role: 'CMO', img: 'https://via.placeholder.com/250' },
    { name: 'Founder 5', role: 'CMO', img: 'https://via.placeholder.com/250' },
];

const FoundersSection = () => {
    return (
        <section id="founders" className="section">
            <div className="container">
                <h2 className="section-title">Tim Founder Kami</h2>
                <div className={styles.grid}>
                    {founders.map((founder, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imgContainer}>
                                <Image src={founder.img} alt={founder.name} width={250} height={250} className={styles.img} />
                            </div>
                            <h4>{founder.name}</h4>
                            <p>{founder.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FoundersSection;