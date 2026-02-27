import { motion } from 'framer-motion';
import { Button } from '@/components/button/button';
import styles from './intro.module.css';

const WHATSAPP_NUMBER = '6281234567890';

function getWhatsAppUrl() {
  const text = 'Hello, I would like to book a session.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const INSTAGRAM_HANDLE = 'artbykaicent';
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

const EASE_LUXURY = [0.76, 0, 0.24, 1] as const;

export const Intro = () => {
  return (
    <section className={styles.intro}>
      <h2 className={styles.hook}>
      We offer a personal, one-on-one studio experience focused on custom
      nail art and authentic tooth jewelry.
      </h2>

      <motion.div
        className={styles.detailsContainer}
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE_LUXURY }}
      >
        <div className={styles.void} aria-hidden />
        <div className={styles.contentColumn}>
          <p className={styles.usp}>
            What sets us apart? We are Depok's very first Tooth Gem specialist,
            using techniques adopted directly from global experts—ensuring
            the safest and most stylish application in town.
          </p>
          <p className={styles.philosophy}>
            From minimalist gel designs to
            fully customized press-ons, everything is tailored just for you.
            Mager keluar rumah? Don't worry, House Calls are available.
          </p>
          <p className={styles.signature}>Hygiene first. Style always.</p>
          <div className={styles.ctaGroup}>
            <Button
              variant="underline"
              label="Book Now"
              color="red-100"
              href={getWhatsAppUrl()}
              className={styles.ctaButton}
            />
            <Button
              variant="underline"
              label={`Instagram @${INSTAGRAM_HANDLE}`}
              href={INSTAGRAM_URL}
              className={styles.ctaButton}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
