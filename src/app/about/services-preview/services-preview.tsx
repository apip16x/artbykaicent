import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/button/button';
import styles from './services-preview.module.css';
import { cn } from '@/lib/utils';

const services = [
  { 
    id: 'nails', 
    label: 'Nail Art', 
    image: 'https://picsum.photos/seed/nailart/800/1000' 
  },
  { 
    id: 'gems', 
    label: 'Tooth Gems', 
    image: 'https://picsum.photos/seed/toothgems/800/1000' 
  },
  { 
    id: 'pressons', 
    label: 'Custom Press-ons', 
    image: 'https://picsum.photos/seed/pressons/800/1000' 
  },
  // { 
  //   id: 'housecalls', 
  //   label: 'House Calls', 
  //   image: 'https://picsum.photos/seed/housecalls/800/1000' 
  // },
];

export const ServicesPreview = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className={styles.section}>
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
            transition={{ duration: 0.4, ease: "easeOut" }}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
      </div>

      <div className={cn(styles.listColumn, styles.teal)}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.heading}>Services</h2>
          <ul className={styles.list}>
            {services.map((service) => (
              <li 
                key={service.id}
                className={styles.listItem}
                onMouseEnter={() => setActiveService(service)}
              >
                <motion.span
                  className={styles.serviceLabel}
                  animate={{ 
                    opacity: activeService.id === service.id ? 1 : 0.5,
                    x: activeService.id === service.id ? 10 : 0
                  }}
                >
                  {service.label}
                </motion.span>
              </li>
            ))}
          </ul>
          <div className={styles.cta}>
            <Button variant="secondary" label="Book via WhatsApp" href="/book" />
          </div>
        </div>
      </div>
    </section>
  );
};
