'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ghost';

type CommonProps = {
  variant?: Variant;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantStyles: Record<Variant, string> = {
  primary: [
    'bg-amber text-board font-semibold',
    'hover:bg-amber-hover',
    'shadow-lg shadow-black/25 hover:shadow-xl hover:shadow-black/30',
    'active:scale-[0.98]',
  ].join(' '),
  ghost: [
    'bg-transparent text-chalk',
    'border border-chalk-dim',
    'hover:bg-chalk-faint hover:border-chalk',
    'active:scale-[0.98]',
  ].join(' '),
};

const baseStyles = [
  'inline-flex items-center justify-center',
  'rounded-lg px-6 py-3 text-sm tracking-wide',
  'transition-all duration-200 ease-out',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-board',
  'disabled:pointer-events-none disabled:opacity-50',
].join(' ');

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', fullWidth, className, children, ...props }, ref) => {
    const classes = cn(
      baseStyles,
      variantStyles[variant],
      fullWidth && 'w-full',
      className,
    );

    if ('href' in props && props.href !== undefined) {
      const { href, ...anchorProps } = props as ButtonAsAnchor;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    const buttonProps = props as ButtonAsButton;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...buttonProps}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
