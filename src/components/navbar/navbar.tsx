import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/button/button';
import { TransitionNavLink } from '@/components/page-transition/TransitionNavLink';
import { TransitionLink } from '@/components/page-transition/TransitionLink';
import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <motion.nav
      className={`${styles.navbar} ${styles.pagePearl}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <TransitionNavLink to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} end>Home</TransitionNavLink>
          <TransitionNavLink to="/services" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Services</TransitionNavLink>
          <TransitionNavLink to="/work" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Work</TransitionNavLink>
        </div>
        <TransitionLink to="/" className={styles.logo}>
          artbykaicent
        </TransitionLink>
        <div className={styles.right}>
          <NavLink to="/rules" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Rules</NavLink>
          <Button variant="underline" label="Inquiries" href="/book" className={styles.cta} />
        </div>
      </div>
    </motion.nav>
  );
};
