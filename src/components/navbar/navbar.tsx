import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/button/button';
import { useHeroNav } from '@/contexts/hero-nav-context';
import { cn } from '@/lib/utils';
import styles from './navbar.module.css';

export const Navbar = () => {
  const { isHeroInView } = useHeroNav();

  return (
    <motion.nav
      className={cn(styles.navbar, isHeroInView && styles.hero)}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/services" className={styles.link}>Services</Link>
          <Link to="/work" className={styles.link}>Work</Link>
        </div>
        <Link to="/" className={styles.logo}>
          artbykaicent
        </Link>
        <div className={styles.right}>
          <Link to="/rules" className={styles.link}>Rules</Link>
          <Button variant="underline" label="Inquiries" href="/book" className={styles.cta} />
        </div>
      </div>
    </motion.nav>
  );
};
