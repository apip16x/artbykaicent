import { motion } from 'framer-motion';
import { Button } from '@/components/button/button';
import styles from './gallery-card.module.css';

interface GalleryCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  alt?: string;
  onClick?: () => void;
}

function getImageAlt(item: { title: string; category: string; alt?: string }): string {
  if (item.alt) return item.alt;
  return item.category === 'Nails'
    ? `${item.title} – Custom nail art Jakarta`
    : `${item.title} – Amsterdam-style tooth gem application`;
}

export const GalleryCard = ({ title, category, image, alt, onClick }: GalleryCardProps) => {
  const imgAlt = alt ?? getImageAlt({ title, category, alt });
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
          alt={imgAlt} 
          className={styles.image}
          referrerPolicy="no-referrer"
        />
        <div className={styles.overlay}>
          <Button
            variant="underline"
            size="sm"
            label="View Set"
            className={styles.viewSet}
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
          />
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>{category}</p>
      </div>
    </motion.div>
  );
};
