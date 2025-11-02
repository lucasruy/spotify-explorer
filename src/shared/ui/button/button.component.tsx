import React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/shared/lib';

import { buttonVariants } from './button.variants';
import type { ButtonProps } from './button.types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, kind, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, kind, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
