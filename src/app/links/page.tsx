import { ArrowUpRight, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './links.module.css';

const LINKS = [
  {
    id: 'wa',
    title: 'WhatsApp',
    subtitle: 'Fastest way to book or ask questions',
    href: 'https://wa.me/wa.me/6285178275267',
    icon: MessageCircle,
    cta: 'Open WhatsApp',
  },
  {
    id: 'ig',
    title: 'Instagram',
    subtitle: 'Portfolio drops, updates, and stories',
    href: 'https://instagram.com/artbykaicent',
    icon: Instagram,
    cta: 'Open Instagram',
  },
] as const;

export const LinksPage = () => {
  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.header}
        >
          <p className={styles.brand}>artbykaicent</p>
          <h1 className={styles.title}>Our Contact</h1>
          <p className={styles.subtitle}>
            Pick your channel and let&apos;s create your next set.
          </p>
        </motion.div>

        <div className={styles.list}>
          {LINKS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * index, duration: 0.45 }}
                className={styles.card}
              >
                <span className={styles.cardAccent} />
                <div className={styles.topRow}>
                  <div>
                    <p className={styles.cardTitle}>{item.title}</p>
                    <p className={styles.cardSubtitle}>{item.subtitle}</p>
                  </div>
                  <span className={styles.iconWrap}>
                    <Icon size={20} />
                  </span>
                </div>
                <div className={styles.ctaRow}>
                  <p className={styles.ctaLabel}>
                    {item.cta}
                  </p>
                  <ArrowUpRight size={16} className={styles.ctaIcon} />
                </div>
              </motion.a>
            );
          })}
        </div>
        <p className={styles.copyright}>© 2026 artbykaicent</p>
      </section>
    </main>
  );
};
