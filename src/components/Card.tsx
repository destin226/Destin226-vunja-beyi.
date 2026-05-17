'use client';

import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient';
  shadow?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', shadow = true, padding = 'md', className, children, ...props }, ref) => {
    const baseStyles = 'rounded-lg border border-tertiary/30';
    
    const variants = {
      default: 'bg-card-bg',
      glass: 'bg-secondary/50 backdrop-blur-xl border-tertiary/50',
      gradient: 'bg-gradient-to-br from-card-bg to-secondary',
    };

    const paddings = {
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
    };

    const shadowClass = shadow ? 'shadow-lg shadow-black/20' : '';

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${shadowClass} ${className || ''}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
