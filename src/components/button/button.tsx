import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import styles from './button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'underline';
export type ButtonSize = 'sm' | 'md' | 'lg';

/** Underline variant only: palette name for text/underline color (e.g. "red", "dark", "blossom"). */
export type UnderlineColor = 'red' | 'blossom' | 'dark' | 'eclipse' | 'pearl' | 'grey';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label?: React.ReactNode;
  href?: string;
  /** Underline variant only: color key from design tokens (red, blossom, dark, eclipse, pearl, grey). */
  color?: UnderlineColor;
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
      color,
      className,
      onClick,
      'aria-label': ariaLabel,
      children,
    },
    ref
  ) => {
    const text = children ?? label ?? '';
    const content = <span className={styles.label}>{text}</span>;

    const colorClass = variant === 'underline' && color ? styles[`underlineColor${color.charAt(0).toUpperCase() + color.slice(1)}`] : null;
    const classNames = cn(styles.button, styles[variant], colorClass, styles[size], className);
    const aria = ariaLabel ?? (typeof text === 'string' ? text : undefined);

    if (href) {
      const isExternal = href.startsWith('http://') || href.startsWith('https://');
      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={classNames}
            onClick={onClick}
            aria-label={aria}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        );
      }
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
