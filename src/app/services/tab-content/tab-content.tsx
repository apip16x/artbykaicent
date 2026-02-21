import { motion, AnimatePresence } from 'framer-motion';
import styles from './tab-content.module.css';
import { cn } from '@/lib/utils';

interface TabContentProps {
  activeTab: string;
}

const contentData = {
  nails: {
    title: "Gel & Extensions",
    description: "Meticulous cuticle care and structure gel application. We focus on retention and clean aesthetics.",
    items: [
      { name: "Nail Gel Only", price: "89k", detail: "Max 3 colors, moisturizer, vitamin oil." },
      { name: "Gel Manicure", price: "130k", detail: "Full cuticle care, shaping, prep, overlay, max 3 colors." },
      { name: "Gel X Manicure", price: "180k", detail: "Soft gel tips (10 fingers) + full manicure prep." },
      { name: "Design: Easy", price: "5k-10k/nail", detail: "Minimalist lines, dots, chrome, or french." },
      { name: "Design: Medium", price: "10k-20k/nail", detail: "Airbrush, blooming gel, aura, etc." },
      { name: "Design: Hard", price: "20k-30k/nail", detail: "Intricate hand-painting, complex chrome." },
      { name: "Charms & Effects", price: "Varies", detail: "Chrome (5k+), Rhinestones (2k+), 3D Gel (10k+), Luxury (20k+)." },
    ],
    image: "https://picsum.photos/seed/nails_service/600/800"
  },
  gems: {
    title: "Tooth Gems",
    description: "Add some sparkle to your smile. We use only lead-free, dental-grade adhesives and genuine Swarovski crystals.",
    items: [
      { name: "Single Crystal", price: "150k", detail: "Swarovski crystal (various sizes)." },
      { name: "Butterfly Set", price: "450k", detail: "4-6 crystals arranged in a butterfly motif." },
      { name: "Window/Frame", price: "350k", detail: "Crystals framing the tooth." },
      { name: "Disco Ball", price: "600k", detail: "Full coverage of one tooth." },
      { name: "Gold Charms", price: "Ask for quote", detail: "18k/22k gold charms (pre-order only)." },
    ],
    image: "https://picsum.photos/seed/gems_service/600/800"
  },
  "press-ons": {
    title: "Custom Press-ons",
    description: "Salon quality nails, reusable and delivered to your door. Perfect for events or those who can't wear nails for work.",
    items: [
      { name: "Sizing Kit", price: "50k", detail: "Essential for the perfect fit. Shipped to you first." },
      { name: "Solid Color Set", price: "200k", detail: "Any shape/length. Includes application kit." },
      { name: "Custom Design Set", price: "Start from 300k", detail: "Based on your reference or freestyle." },
      { name: "Rush Order", price: "+100k", detail: "3-day turnaround." },
    ],
    image: "https://picsum.photos/seed/pressons_service/600/800"
  },
  aftercare: {
    title: "Aftercare & Hygiene",
    description: "We take sanitation seriously. All tools are disinfected between clients.",
    items: [
      { name: "Hygiene Protocol", price: "Standard", detail: "All tools and stations are disinfected between every service." },
      { name: "Nail Aftercare", price: "Info", detail: "Refrain from picking/peeling. Moisturize cuticles daily." },
      { name: "Maintenance", price: "Info", detail: "Refills recommended every 3-4 weeks." },
    ],
    image: "https://picsum.photos/seed/aftercare/600/800"
  }
};

export const TabContent = ({ activeTab }: TabContentProps) => {
  const data = contentData[activeTab as keyof typeof contentData];

  return (
    <section className={styles.section}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={styles.grid}
        >
          <div className={styles.infoColumn}>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.description}>{data.description}</p>
            
            <ul className={styles.list}>
              {data.items.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <div className={styles.itemHeader}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemPrice}>{item.price}</span>
                  </div>
                  <p className={styles.itemDetail}>{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.imageColumn}>
             <img 
              src={data.image} 
              alt={data.title} 
              className={styles.image}
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
