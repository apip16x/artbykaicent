import { createContext, useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Phase = 'idle' | 'covering' | 'revealing' | 'done';

type PageTransitionState = {
  isTransitioning: boolean;
  phase: Phase;
  targetPath: string | null;
  triggerTransition: (path: string) => void;
  onCoveringComplete: () => void;
  onRevealComplete: () => void;
};

const PageTransitionContext = createContext<PageTransitionState | null>(null);

const TRANSITION_ROUTES = ['/', '/about', '/services', '/work'];

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [phase, setPhase] = useState<Phase>('idle');
  const [targetPath, setTargetPath] = useState<string | null>(null);

  const triggerTransition = useCallback(
    (path: string) => {
      const normalized = path === '/about' ? '/' : path;
      if (!TRANSITION_ROUTES.includes(normalized)) {
        navigate(path);
        return;
      }
      setTargetPath(path);
      setIsTransitioning(true);
      setPhase('covering');
    },
    [navigate]
  );

  const onCoveringComplete = useCallback(() => {
    if (targetPath) {
      navigate(targetPath);
      setPhase('revealing');
    }
  }, [navigate, targetPath]);

  const onRevealComplete = useCallback(() => {
    setPhase('idle');
    setTargetPath(null);
    setIsTransitioning(false);
  }, []);

  return (
    <PageTransitionContext.Provider
      value={{
        isTransitioning,
        phase,
        targetPath,
        triggerTransition,
        onCoveringComplete,
        onRevealComplete,
      }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition(): PageTransitionState {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) throw new Error('usePageTransition must be used within PageTransitionProvider');
  return ctx;
}
