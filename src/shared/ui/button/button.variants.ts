import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50c cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/70',
        outline:
          'border border-button text-accent-foreground hover:bg-accent',
        inverted:
          'bg-inverted text-inverted-foreground hover:bg-inverted/70',
        ghost:
          'text-accent-foreground hover:bg-accent',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      kind: {
        icon: ""
      },
      size: {
        xs: 'h-6 px-3',
        sm: 'h-8 px-3',
        md: 'h-10 px-4 py-2',
        lg: 'h-12 px-8',
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
    compoundVariants: [
      {
        variant: ["primary", "secondary", "link", "outline", "inverted", "ghost", "destructive"],
        kind: "icon",
        class: "h-10 w-10 p-0 aspect-square rounded-full",
      },
    ]
  }
);
