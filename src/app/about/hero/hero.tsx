import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/button/button';
import styles from './hero.module.css';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className={styles.hero}>
      <motion.div style={{ y, opacity }} className={styles.content}>
        <h1 className={styles.headline}>
          Your private nail tech <br />
          <span className={styles.italic}>&</span> tooth gem specialist
        </h1>
        <p className={styles.subline}>
          Based in Jakarta and Depok.
        </p>
        <Button variant="primary" label="View Services" href="/services" className={styles.cta} />
      </motion.div>
      
      <div className={styles.scrollIndicator}>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className={styles.arrow}
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};
