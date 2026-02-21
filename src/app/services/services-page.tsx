import { useState } from 'react';
import { ServiceTabs } from './service-tabs/service-tabs';
import { TabContent } from './tab-content/tab-content';
import { Policy } from './policy/policy';
import { motion } from 'framer-motion';

export const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('nails');

  return (
    <main className="pt-20"> {/* Add padding top to account for fixed navbar */}
      <section className="py-20 px-8 border-b border-ink flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-6xl mb-4 italic"
        >
          Menu & Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg max-w-2xl opacity-70"
        >
          Curated treatments for your hands and smile.
        </motion.p>
      </section>

      <ServiceTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabContent activeTab={activeTab} />
      <Policy />
    </main>
  );
};
