import styles from './policy.module.css';
import { cn } from '@/lib/utils';

export const Policy = () => {
  return (
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
};
