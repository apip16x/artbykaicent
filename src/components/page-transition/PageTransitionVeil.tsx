import { motion, useReducedMotion } from 'framer-motion';
import { usePageTransition } from '@/contexts/page-transition-context';
import styles from './page-transition.module.css';

const EASE_LUXURY = [0.76, 0, 0.24, 1] as const;
const DURATION = 0.8;

export function PageTransitionVeil() {
  const { phase, onCoveringComplete, onRevealComplete } = usePageTransition();
  const reducedMotion = useReducedMotion();
  const duration = reducedMotion ? 0.01 : DURATION;

  const covering = phase === 'covering';
  const revealing = phase === 'revealing';
  const visible = covering || revealing;

  const panelX = covering ? 0 : revealing ? '-100%' : '100%';

  return (
    <div
      className={`${styles.veil} ${visible ? styles.veilActive : ''}`}
      aria-hidden={!visible}
    >
      {visible && (
        <motion.div
          className={`${styles.panel} ${styles.panelEclipse}`}
          initial={{ x: '100%' }}
          animate={{ x: panelX }}
          transition={{ duration, ease: EASE_LUXURY }}
          onAnimationComplete={() => {
            if (covering) onCoveringComplete();
            if (revealing) onRevealComplete();
          }}
        />
      )}
    </div>
  );
}
