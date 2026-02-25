import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { WORK_TEASER_ITEMS } from '@/data/work-data';
import { Button } from '@/components/button/button';
import styles from './work-teaser.module.css';

export const WorkTeaser = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className={styles.section}>
      <div className={styles.stickyContainer}>
        <div className={styles.topContainer}>
          <h2 className={styles.heading}>Selected Works</h2>
          <Button variant="underline" label="Our Work" href="/work" />
        </div>
        <div className={styles.overflowWrapper}>
          <motion.div style={{ x }} className={styles.track}>
            {WORK_TEASER_ITEMS.map((work) => (
              <div key={work.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img
                    src={work.image}
                    alt={work.title}
                    className={styles.image}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className={styles.caption}>{work.title}</p>
              </div>
            ))}
            {WORK_TEASER_ITEMS.map((work) => (
              <div key={`dup-${work.id}`} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img
                    src={work.image}
                    alt={work.title}
                    className={styles.image}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className={styles.caption}>{work.title}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
