import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { clipPathCorners } from '../utils/clip-path';

const transitionStyles = 'transition-all duration-300';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-syne font-medium',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        menu: 'bg-amber-600/60 before:bg-amber-950/60 text-white hover:bg-amber-600/100',
        link: 'text-white underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
      fill: {
        default: '',
        stretch: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  fill,
  cornerSize = 'xs',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    cornerSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, fill, className }),
        transitionStyles,
        'relative',
        'polygon-border'
      )}
      style={{
        clipPath: `${clipPathCorners(`var(--corner-${cornerSize})`)}`,
      }}
      {...props}
    />
  );
}

export { Button, buttonVariants };
