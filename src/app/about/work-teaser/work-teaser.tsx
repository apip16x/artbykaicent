import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './work-teaser.module.css';

const works = [
  { id: 1, title: "Chrome Hearts", img: "https://picsum.photos/seed/nails1/600/800" },
  { id: 2, title: "Swarovski Drip", img: "https://picsum.photos/seed/gems1/600/800" },
  { id: 3, title: "Y2K Cyber", img: "https://picsum.photos/seed/nails2/600/800" },
  { id: 4, title: "Classic French", img: "https://picsum.photos/seed/nails3/600/800" },
];

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
        <h2 className={styles.heading}>Selected Works</h2>
        <div className={styles.overflowWrapper}>
          <motion.div style={{ x }} className={styles.track}>
            {works.map((work) => (
              <div key={work.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img 
                    src={work.img} 
                    alt={work.title} 
                    className={styles.image}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className={styles.caption}>{work.title}</p>
              </div>
            ))}
            {/* Duplicate for infinite feel if needed, or just let it scroll */}
             {works.map((work) => (
              <div key={`dup-${work.id}`} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img 
                    src={work.img} 
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
