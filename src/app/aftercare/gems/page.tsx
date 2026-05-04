import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Clock3, Droplets } from 'lucide-react';
import styles from './aftercaregems.module.css';

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

const AFTERCARE_STEPS = [
  {
    id: 'first-hours',
    title: 'The First 1 - 2 Hours',
    description:
      'Do not eat for 1 hour after the gem is placed. No sticky foods and acidic drinks for 1-2 hours after application.',
    icon: Clock3,
  },
  {
    id: 'first-day-drinks',
    title: 'The First 12 - 24 Hours',
    description:
      'Do not smoke for 12 hours. Only drink water for the next 24 hours. Avoid drinking soda, coffee, and tea for 24 hours.',
    icon: Droplets,
  },
  {
    id: 'food-note',
    title: 'Food Note For 24 Hours',
    description:
      'Only eat soft foods. Avoid chewy and hard food. Be careful with hard impact food (fried food, apples, corn, chicken, etc.).',
    icon: ShieldCheck,
  },
  {
    id: 'daily-maintenance',
    title: 'Daily Maintenance & Hygiene',
    description:
      'No picking, touching, or playing with the gem after application. Do not brush directly over the gem for 8 hours. Always brush gently and use only a soft bristle brush to reduce risk of damage.',
    icon: Sparkles,
  },
] as const;

export const AftercareGemsPage = () => {
  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <motion.header
          className={styles.hero}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_LUXURY }}
        >
          <p className={styles.eyebrow}>Aftercare</p>
          <h1 className={styles.title}>Guide Aftercare Gems</h1>
          <p className={styles.subtitle}>
            Please read carefully to ensure your gem lasts. Be mindful that the gem adhesive will take 24 hours to fully cure.
          </p>
        </motion.header>

        <section className={styles.grid} aria-label="Aftercare steps">
          {AFTERCARE_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.id}
                className={styles.card}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * index, duration: 0.45, ease: EASE_LUXURY }}
              >
                <div className={styles.cardTop}>
                  <span className={styles.iconWrap}>
                    <Icon size={18} />
                  </span>
                  <span className={styles.stepNumber}>0{index + 1}</span>
                </div>
                <h2 className={styles.cardTitle}>{step.title}</h2>
                <p className={styles.cardDescription}>{step.description}</p>
              </motion.article>
            );
          })}
        </section>
      </section>
    </main>
  );
};
