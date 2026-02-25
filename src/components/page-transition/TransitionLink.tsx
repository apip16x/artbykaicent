import { Link, useLocation } from 'react-router-dom';
import { usePageTransition } from '@/contexts/page-transition-context';

const TRANSITION_PATHS = ['/', '/services', '/work'];

type TransitionLinkProps = {
  to: string;
  className?: string;
  children: React.ReactNode;
};

export function TransitionLink({ to, className, children }: TransitionLinkProps) {
  const { triggerTransition } = usePageTransition();
  const location = useLocation();
  const path = to === '/about' ? '/' : to;
  const useTransition = TRANSITION_PATHS.includes(path);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!useTransition) return;
    const target = (e.currentTarget.getAttribute('href') ?? path) as string;
    if (target === location.pathname || (target === '/' && location.pathname === '/about')) return;
    e.preventDefault();
    triggerTransition(target);
  };

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
