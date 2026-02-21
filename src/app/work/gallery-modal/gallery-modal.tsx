import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import styles from './gallery-modal.module.css';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  category: string;
}

export const GalleryModal = ({ isOpen, onClose, image, title, category }: GalleryModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={onClose}>
              <X size={24} />
            </button>
            <div className={styles.imageContainer}>
              <img src={image} alt={title} className={styles.image} referrerPolicy="no-referrer" />
            </div>
            <div className={styles.info}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.category}>{category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
