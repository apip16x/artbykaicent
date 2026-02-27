import { NavLink, useLocation } from 'react-router-dom';
import { usePageTransition } from '@/contexts/page-transition-context';

const TRANSITION_PATHS = ['/', '/services', '/work'];

type TransitionNavLinkProps = {
  to: string;
  className?: string | ((props: { isActive: boolean }) => string);
  children: React.ReactNode;
  end?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export function TransitionNavLink({ to, className, children, end, onClick }: TransitionNavLinkProps) {
  const { triggerTransition } = usePageTransition();
  const location = useLocation();
  const path = to === '/about' ? '/' : to;
  const useTransition = TRANSITION_PATHS.includes(path);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (!useTransition) return;
    const target = (e.currentTarget.getAttribute('href') ?? path) as string;
    if (target === location.pathname || (target === '/' && location.pathname === '/about')) return;
    e.preventDefault();
    triggerTransition(target);
  };

  return (
    <NavLink
      to={to}
      className={className}
      onClick={handleClick}
      end={end}
    >
      {children}
    </NavLink>
  );
}
