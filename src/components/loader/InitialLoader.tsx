import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './loader.module.css';

const LOADER_SESSION_KEY = 'artbykaicent_loader_shown';
const MIN_VISIBLE_MS = 2400;

const easeLuxury = [0.76, 0, 0.24, 1] as const;

type InitialLoaderProps = {
  onComplete: () => void;
};

export function InitialLoader({ onComplete }: InitialLoaderProps) {
  const [phase, setPhase] = useState<'idle' | 'reveal' | 'exit' | 'done'>('idle');
  const reducedMotion = useReducedMotion();
  const duration = reducedMotion ? 0.01 : 1;
  const lineDuration = reducedMotion ? 0.01 : 1.2;
  const revealDuration = reducedMotion ? 0.01 : 0.9;
  const exitDuration = reducedMotion ? 0.01 : 1;

  useEffect(() => {
    const t = setTimeout(() => setPhase('reveal'), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase !== 'reveal') return;
    const t = setTimeout(() => setPhase('exit'), MIN_VISIBLE_MS);
    return () => clearTimeout(t);
  }, [phase]);

  const handleCurtainExitComplete = () => {
    setPhase('done');
    try {
      sessionStorage.setItem(LOADER_SESSION_KEY, '1');
    } catch {
      // ignore
    }
    onComplete();
  };

  if (phase === 'done') return null;

  return (
    <motion.div
      className={styles.loader}
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Drawing line */}
      <div className={styles.lineWrap} aria-hidden>
        <motion.div
          className={styles.line}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: lineDuration,
            ease: easeLuxury,
            delay: phase === 'idle' ? 0.3 : 0,
          }}
        />
      </div>

      {/* Logo with mask reveal (slide up from line) + blossom pulse */}
      <div className={styles.logoWrap}>
        {!reducedMotion && (
          <motion.div
            className={styles.logoPulse}
            animate={{
              opacity: [0.15, 0.28, 0.15],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            aria-hidden
          />
        )}
        <motion.span
          className={styles.logoText}
          initial={{ y: 24, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: revealDuration,
            ease: easeLuxury,
            delay: phase === 'idle' ? lineDuration * 0.5 : 0,
          }}
        >
          artbykaicent
        </motion.span>
      </div>

      {/* Curtains: split vertically to reveal home */}
      {phase === 'exit' && (
        <>
          <motion.div
            className={`${styles.curtain} ${styles.curtainLeft}`}
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{
              duration: exitDuration,
              ease: easeLuxury,
            }}
            onAnimationComplete={handleCurtainExitComplete}
          />
          <motion.div
            className={`${styles.curtain} ${styles.curtainRight}`}
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{
              duration: exitDuration,
              ease: easeLuxury,
            }}
          />
        </>
      )}
    </motion.div>
  );
}

export function shouldShowLoader(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    return !sessionStorage.getItem(LOADER_SESSION_KEY);
  } catch {
    return true;
  }
}
