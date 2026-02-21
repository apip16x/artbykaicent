import { motion } from 'framer-motion';
import styles from './service-tabs.module.css';
import { cn } from '@/lib/utils';

interface ServiceTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: 'nails', label: 'Nails' },
  { id: 'gems', label: 'Tooth Gems' },
  { id: 'press-ons', label: 'Press-ons' },
  { id: 'aftercare', label: 'Aftercare & Hygiene' },
];

export const ServiceTabs = ({ activeTab, setActiveTab }: ServiceTabsProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.tabsWrapper}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              styles.tab,
              activeTab === tab.id && styles.activeTab
            )}
          >
            <span className={styles.label}>{tab.label}</span>
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabIndicator"
                className={styles.indicator}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};
