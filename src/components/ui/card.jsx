import React, { forwardRef } from 'react';

const baseCardClass = 'rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm';

function cn(...values) {
  return values.filter(Boolean).join(' ');
}

export const Card = forwardRef(function Card({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={cn(baseCardClass, className)} {...props}>
      {children}
    </div>
  );
});

export const CardHeader = forwardRef(function CardHeader({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props}>
      {children}
    </div>
  );
});

export const CardTitle = forwardRef(function CardTitle({ className, children, ...props }, ref) {
  return (
    <h3 ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props}>
      {children}
    </h3>
  );
});

export const CardDescription = forwardRef(function CardDescription({ className, children, ...props }, ref) {
  return (
    <p ref={ref} className={cn('text-sm text-slate-400', className)} {...props}>
      {children}
    </p>
  );
});

export const CardContent = forwardRef(function CardContent({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
});

export const CardFooter = forwardRef(function CardFooter({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
});
