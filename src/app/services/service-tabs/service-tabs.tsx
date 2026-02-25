import { motion } from 'framer-motion';
import { SERVICE_TABS } from '@/data/services-data';
import { cn } from '@/lib/utils';
import styles from './service-tabs.module.css';

interface ServiceTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const ServiceTabs = ({ activeTab, setActiveTab }: ServiceTabsProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.tabsWrapper}>
        {SERVICE_TABS.map((tab) => (
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
