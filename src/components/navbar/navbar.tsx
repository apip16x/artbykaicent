import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/button/button';
import { TransitionNavLink } from '@/components/page-transition/TransitionNavLink';
import { TransitionLink } from '@/components/page-transition/TransitionLink';
import styles from './navbar.module.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aftercareOpen, setAftercareOpen] = useState(false);
  const location = useLocation();

  const isAftercareRoute = location.pathname.startsWith('/aftercare');

  const closeMenu = () => {
    setMenuOpen(false);
    setAftercareOpen(false);
  };

  useEffect(() => {
    setMenuOpen(false);
    setAftercareOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      className={`${styles.navbar} ${styles.pagePearl}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className={styles.desktopLinks}>
            <TransitionNavLink to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} end>Home</TransitionNavLink>
            <TransitionNavLink to="/services" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Services</TransitionNavLink>
            <TransitionNavLink to="/work" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Work</TransitionNavLink>
          </div>
        </div>
        <TransitionLink to="/" className={styles.logo} onClick={closeMenu}>
          artbykaicent
        </TransitionLink>
        <div className={styles.right}>
          <div
            className={styles.aftercareGroup}
            onMouseEnter={() => setAftercareOpen(true)}
            onMouseLeave={() => setAftercareOpen(false)}
          >
            <button
              type="button"
              className={`${styles.link} ${styles.aftercareTrigger} ${isAftercareRoute ? styles.active : ''}`}
              onClick={() => setAftercareOpen((prev) => !prev)}
              aria-expanded={aftercareOpen}
            >
              Aftercare
              <ChevronDown size={14} className={`${styles.aftercareChevron} ${aftercareOpen ? styles.aftercareChevronOpen : ''}`} />
            </button>
            <AnimatePresence>
              {aftercareOpen && (
                <motion.div
                  className={styles.aftercareDropdown}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                >
                  <TransitionNavLink
                    to="/aftercare/gems"
                    onClick={closeMenu}
                    className={({ isActive }) => `${styles.aftercareDropdownLink} ${isActive ? styles.active : ''}`}
                  >
                    <span className={styles.aftercareItemBody}>
                      <span className={styles.aftercareItemTitle}>Gems</span>
                      <span className={styles.aftercareItemMeta}>Aftercare guide</span>
                    </span>
                  </TransitionNavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <NavLink to="/rules" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''} ${styles.rulesLink}`}>Rules</NavLink>
          <Button variant="underline" label="Inquiries" href="/links" className={styles.cta} />
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.dropdown}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <TransitionNavLink to="/" className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.active : ''}`} end>Home</TransitionNavLink>
            <TransitionNavLink to="/services" className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.active : ''}`}>Services</TransitionNavLink>
            <TransitionNavLink to="/work" className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.active : ''}`}>Work</TransitionNavLink>
            <button
              type="button"
              className={`${styles.dropdownLink} ${styles.mobileAftercareButton} ${isAftercareRoute ? styles.active : ''}`}
              onClick={() => setAftercareOpen((prev) => !prev)}
              aria-expanded={aftercareOpen}
            >
              Aftercare
              <ChevronDown size={14} className={`${styles.aftercareChevron} ${aftercareOpen ? styles.aftercareChevronOpen : ''}`} />
            </button>
            <AnimatePresence>
              {aftercareOpen && (
                <motion.div
                  className={styles.mobileAftercareList}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <TransitionNavLink
                    to="/aftercare/gems"
                    onClick={closeMenu}
                    className={({ isActive }) => `${styles.mobileAftercareLink} ${isActive ? styles.active : ''}`}
                  >
                    Gems
                  </TransitionNavLink>
                </motion.div>
              )}
            </AnimatePresence>
            <NavLink to="/rules" className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.active : ''}`}>Rules</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
