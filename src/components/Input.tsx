'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, helperText, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-white mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-tertiary">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`w-full bg-secondary border ${
              error ? 'border-danger' : 'border-tertiary/50'
            } rounded-lg px-4 py-2.5 ${icon ? 'pl-10' : ''} text-white placeholder-tertiary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all ${className || ''}`}
            {...props}
          />
        </div>
        {error && (
          <p className="text-sm text-danger mt-1">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-tertiary/70 mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
