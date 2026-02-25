import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WORK_FILTERS, WORK_ITEMS } from '@/data/work-data';
import type { WorkItem } from '@/data/work-data';
import { GalleryCard } from '../gallery-card/gallery-card';
import { GalleryModal } from '../gallery-modal/gallery-modal';
import { cn } from '@/lib/utils';
import styles from './gallery-grid.module.css';

export const GalleryGrid = () => {
  const [activeFilter, setActiveFilter] = useState(WORK_FILTERS[0]);
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);

  const filteredItems =
    activeFilter === 'All'
      ? WORK_ITEMS
      : WORK_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className={styles.container}>
      <div className={styles.filterBar}>
        {WORK_FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              styles.filterButton,
              activeFilter === filter && styles.activeFilter
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className={styles.grid}
      >
        <AnimatePresence mode='popLayout'>
          {filteredItems.map((item) => (
            <GalleryCard 
              key={item.id}
              {...item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <GalleryModal 
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        image={selectedItem?.image || ''}
        title={selectedItem?.title || ''}
        category={selectedItem?.category || ''}
      />
    </section>
  );
};
