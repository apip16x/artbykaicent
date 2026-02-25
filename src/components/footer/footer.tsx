import { Button } from '@/components/button/button';

export const Footer = () => {
  return (
    <footer>
      <section className="py-32 px-8 flex flex-col items-center text-center border-b border-grey-120 bg-pearl-100 text-dark-100">
        <h2 className="font-display text-5xl mb-8 italic">Ready to get iced?</h2>
        <p className="max-w-xl text-lg mb-12 opacity-70">
          Private studio sessions available in Jakarta and Depok.
          House calls available upon request for a small travel fee.
        </p>
        <Button size="lg" variant="underline">Book Appointment</Button>
      </section>
      <div className="py-12 px-16 flex justify-between items-end bg-red-100 text-pearl-80 border-t border-grey-120">
        <div>
          <p className="font-display text-2xl">artbykaicent</p>
          <p className="text-sm opacity-70 mt-2">© 2024</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">TikTok</a>
        </div>
      </div>
    </footer>
  );
};
