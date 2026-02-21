import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/button/button';
import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          artbykaicent
        </Link>
        <div className={styles.links}>
          <Link to="/about" className={styles.link}>About</Link>
          <Link to="/services" className={styles.link}>Services</Link>
          <Link to="/work" className={styles.link}>Work</Link>
          <Button variant="outline" label="Book Now" href="/book" />
        </div>
      </div>
    </motion.nav>
  );
};
