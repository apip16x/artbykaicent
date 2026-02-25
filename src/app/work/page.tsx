import { motion } from 'framer-motion';
import { GalleryGrid } from './gallery-grid/gallery-grid';

export const WorkPage = () => {
  return (
    <main className="pt-16 md:pt-20 min-h-screen bg-pearl-100 text-dark-100">
      <section className="py-12 px-4 md:py-16 md:px-6 lg:py-20 lg:px-8 border-b border-grey-120 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 italic"
        >
          Our Work
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base md:text-lg max-w-2xl opacity-70 font-body px-2"
        >
          A collection of curated nail sets and tooth gems.
        </motion.p>
      </section>

      <GalleryGrid />
    </main>
  );
};
