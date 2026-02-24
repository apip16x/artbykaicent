import { motion } from 'framer-motion';
import styles from './policy-section.module.css';
import { cn } from '@/lib/utils';

const PolicySection = () => (
  <section className={styles.section}>
    <div className={cn(styles.column, styles.sage)}>
      <div className={styles.content}>
        <h3 className={styles.heading}>House Calls</h3>
        <p className={styles.text}>
          We bring the studio to you. Available for Jakarta and Depok areas.
          <br /><br />
          <strong>Travel Fee:</strong> Transport cost adjusted to online taxi round-trip fares (Grab/Gojek).
          <br /><br />
          <strong>Requirement:</strong> Please ensure you have a table and two chairs available, along with good lighting.
        </p>
      </div>
    </div>
    
    <div className={cn(styles.column, styles.teal)}>
      <div className={styles.content}>
        <h3 className={styles.heading}>Booking Policy</h3>
        <p className={styles.text}>
          <strong>Deposit:</strong> Non-refundable 50k deposit required to secure slot (deducted from total).
          <br /><br />
          <strong>Lateness:</strong> 30 mins late results in simple design + late fee. 50 mins late results in automatic cancellation.
          <br /><br />
          <strong>Rescheduling:</strong> Permitted up to 48 hours before the appointment for urgent situations.
          <br /><br />
          <strong>Guarantee:</strong> Gel/Gel X repairs are free if lifting occurs within 5 days (must confirm within 5-day window).
        </p>
      </div>
    </div>
  </section>
);

export const RulesPage = () => {
  return (
    <main className="pt-16 md:pt-20 min-h-screen bg-bg">
      <section className="py-12 px-4 md:py-16 md:px-6 lg:py-20 lg:px-8 border-b border-ink flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 italic"
        >
          Rules
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base md:text-lg max-w-2xl opacity-70 px-2"
        >
          House calls and booking policy.
        </motion.p>
      </section>

      <PolicySection />
    </main>
  );
};
