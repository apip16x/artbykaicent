import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryCard } from '../gallery-card/gallery-card';
import { GalleryModal } from '../gallery-modal/gallery-modal';
import styles from './gallery-grid.module.css';
import { cn } from '@/lib/utils';

// Mock Data
const workItems = [
  { id: '1', title: 'Chrome Hearts', category: 'Nails', image: 'https://picsum.photos/seed/nails1/600/800' },
  { id: '2', title: 'Emerald City', category: 'Gems', image: 'https://picsum.photos/seed/gems1/600/800' },
  { id: '3', title: 'Tortoise Shell', category: 'Nails', image: 'https://picsum.photos/seed/nails2/600/800' },
  { id: '4', title: 'Butterfly Effect', category: 'Gems', image: 'https://picsum.photos/seed/gems2/600/800' },
  { id: '5', title: 'Aura Blush', category: 'Nails', image: 'https://picsum.photos/seed/nails3/600/800' },
  { id: '6', title: 'Gold Grillz', category: 'Gems', image: 'https://picsum.photos/seed/gems3/600/800' },
  { id: '7', title: 'Cyber Y2K', category: 'Nails', image: 'https://picsum.photos/seed/nails4/600/800' },
  { id: '8', title: 'Swarovski Dust', category: 'Gems', image: 'https://picsum.photos/seed/gems4/600/800' },
  { id: '9', title: 'French Micro', category: 'Nails', image: 'https://picsum.photos/seed/nails5/600/800' },
];

const filters = ['All', 'Nails', 'Gems'];

export const GalleryGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<(typeof workItems)[0] | null>(null);

  const filteredItems = activeFilter === 'All' 
    ? workItems 
    : workItems.filter(item => item.category === activeFilter);

  return (
    <section className={styles.container}>
      <div className={styles.filterBar}>
        {filters.map(filter => (
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
