import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES_CONTENT } from '@/data/services-data';
import styles from './tab-content.module.css';

interface TabContentProps {
  activeTab: string;
}

export const TabContent = ({ activeTab }: TabContentProps) => {
  const data = SERVICES_CONTENT[activeTab];
  if (!data) return null;

  return (
    <section className={styles.section}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={styles.grid}
        >
          <div className={styles.infoColumn}>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.description}>{data.description}</p>
            
            <ul className={styles.list}>
              {data.items.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <div className={styles.itemHeader}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemPrice}>{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/links" className={styles.bookLink}>
              Book now
            </Link>
          </div>

          <div className={styles.imageColumn}>
             <img 
              src={data.image} 
              alt={data.title} 
              className={styles.image}
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
