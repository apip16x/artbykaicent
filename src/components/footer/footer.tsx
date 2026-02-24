export const Footer = () => {
  return (
    <footer className="py-12 px-8 flex justify-between items-end bg-brand-midnight text-brand-beige">
      <div>
        <p className="font-display text-2xl">artbykaicent</p>
        <p className="text-sm opacity-50 mt-2">© 2024</p>
      </div>
      <div className="flex gap-4">
        <a href="#" className="hover:underline">Instagram</a>
        <a href="#" className="hover:underline">TikTok</a>
      </div>
    </footer>
  );
};
