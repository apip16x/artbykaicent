import { motion } from 'framer-motion';
import styles from './gallery-card.module.css';
import { cn } from '@/lib/utils';

interface GalleryCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  onClick?: () => void;
}

export const GalleryCard = ({ title, category, image, onClick }: GalleryCardProps) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className={styles.card}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt={title} 
          className={styles.image}
          referrerPolicy="no-referrer"
        />
        <div className={styles.overlay}>
          <span className={styles.viewDetails}>View Details</span>
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>{category}</p>
      </div>
    </motion.div>
  );
};
