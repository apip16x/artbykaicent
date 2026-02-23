import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import styles from './button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'underline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label?: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  'aria-label'?: string;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      label,
      href,
      className,
      onClick,
      'aria-label': ariaLabel,
      children,
    },
    ref
  ) => {
    const text = children ?? label ?? '';
    const content = <span className={styles.label}>{text}</span>;

    const classNames = cn(styles.button, styles[variant], styles[size], className);
    const aria = ariaLabel ?? (typeof text === 'string' ? text : undefined);

    if (href) {
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          to={href}
          className={classNames}
          onClick={onClick}
          aria-label={aria}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        className={classNames}
        onClick={onClick}
        aria-label={aria}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
