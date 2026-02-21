import { motion } from 'framer-motion';
import styles from './intro.module.css';
import { cn } from '@/lib/utils';

export const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={cn(styles.column, styles.sage)}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.contentWrapper}
        >
          <h2 className={styles.heading}>The Vibe</h2>
          <p className={styles.text}>
            artbykaicent is your go to spot for cute nail art, sparkly gems, and custom press ons. 
            We love the fine details and making sure you stay shining.
          </p>
        </motion.div>
      </div>
      
      <div className={cn(styles.column, styles.imageColumn)}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.imageWrapper}
        >
          <img 
            src="https://picsum.photos/seed/studio/800/1000" 
            alt="Studio Vibe" 
            className={styles.image}
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};
