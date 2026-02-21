import { motion } from 'framer-motion';
import { GalleryGrid } from './gallery-grid/gallery-grid';

export const WorkPage = () => {
  return (
    <main className="pt-20 min-h-screen bg-brand-beige text-brand-dark-green">
      <section className="py-20 px-8 border-b border-ink flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-6xl mb-4 italic"
        >
          Our Work
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg max-w-2xl opacity-70 font-body"
        >
          A collection of curated nail sets and tooth gems.
        </motion.p>
      </section>

      <GalleryGrid />
    </main>
  );
};
