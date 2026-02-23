import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type HeroNavContextValue = {
  isHeroInView: boolean;
  setHeroInView: (value: boolean) => void;
};

const HeroNavContext = createContext<HeroNavContextValue | null>(null);

export function HeroNavProvider({ children }: { children: ReactNode }) {
  const [isHeroInView, setHeroInView] = useState(false);
  return (
    <HeroNavContext.Provider value={{ isHeroInView, setHeroInView }}>
      {children}
    </HeroNavContext.Provider>
  );
}

export function useHeroNav() {
  const ctx = useContext(HeroNavContext);
  if (!ctx) throw new Error('useHeroNav must be used within HeroNavProvider');
  return ctx;
}
