import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useHeroNav } from '@/contexts/hero-nav-context';
import styles from './hero.module.css';

export const Hero = () => {
  const ref = useRef(null);
  /* Hero state until section fully leaves viewport (next section starts) */
  const isInView = useInView(ref, { amount: 0 });
  const { setHeroInView } = useHeroNav();

  useEffect(() => {
    setHeroInView(isInView);
    return () => setHeroInView(false);
  }, [isInView, setHeroInView]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className={styles.hero}>
      <div className={styles.bgGrid} aria-hidden>
        <div className={styles.bgCell}>
          <img src="/images/hero%202.jpeg" alt="" className={styles.bgImage} />
        </div>
        <div className={styles.bgCell}>
          <img src="/images/hero%209.png" alt="" className={styles.bgImage2} />
        </div>
      </div>
      <motion.div style={{ y, opacity }} className={styles.content}>
        <h1 className={styles.headline}>
          your private nail tech<br/>& tooth gem artist
        </h1>
        <p className={styles.subline}>
          Based in Jakarta and Depok.
        </p>
        {/* <Button variant="primary" label="View Services" href="/services" className={styles.cta} /> */}
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
