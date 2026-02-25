import { motion, useReducedMotion } from 'framer-motion';
import { usePageTransition } from '@/contexts/page-transition-context';
import styles from './page-transition.module.css';

const EASE_LUXURY = [0.76, 0, 0.24, 1] as const;
const DURATION = 0.8;

export function TransitionContent({ children }: { children: React.ReactNode }) {
  const { phase } = usePageTransition();
  const reducedMotion = useReducedMotion();
  const duration = reducedMotion ? 0.01 : DURATION;
  const isRevealing = phase === 'revealing';

  return (
    <motion.div
      className={styles.contentWrap}
      initial={{ scale: isRevealing ? 0.95 : 1 }}
      animate={{ scale: 1 }}
      transition={{ duration, ease: EASE_LUXURY }}
    >
      {children}
    </motion.div>
  );
}
