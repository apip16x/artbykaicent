import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/button/button';
import { SERVICES_PREVIEW } from '@/data/services-data';
import styles from './services-preview.module.css';

export const ServicesPreview = () => {
  const [activeService, setActiveService] = useState(SERVICES_PREVIEW[0]);

  return (
    <section className={styles.section}>
      <div className={styles.topContainer}>
        <h2 className={styles.heading}>Services</h2>
        <div className={styles.cta}>
          <Button variant="underline" label="Our Services" href="/services" />
        </div>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.imageColumn}>
          <AnimatePresence mode="wait">
            <motion.img
              key={activeService.id}
              src={activeService.image}
              alt={activeService.label}
              className={styles.image}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
        </div>

        <div className={styles.listColumn}>
          <ul className={styles.list}>
            {SERVICES_PREVIEW.map((service) => (
              <li
                key={service.id}
                className={styles.listItem}
                onMouseEnter={() => setActiveService(service)}
              >
                <span className={styles.serviceLabel}>{service.label}</span>
                <Link
                  to="/links"
                  className={styles.bookLink}
                  onClick={(e) => e.stopPropagation()}
                >
                  Book now
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
