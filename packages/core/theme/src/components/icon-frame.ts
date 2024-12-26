/** Dependencies */
import { tv, VariantProps } from 'tailwind-variants';

/** Create the tailwind variant for the icon component */
export const iconFrame = tv({
  slots: {
    base: 'select-none bg-surface-variant/40 inline-flex justify-center items-center rounded-full',
    icon: 'fill-on-surface'
  },
  variants: {
    size: {
      xs: {
        base: 'p-6dp',
        icon: 'size-12dp'
      },
      sm: {
        base: 'p-8dp',
        icon: 'size-16dp'
      },
      md: {
        base: 'p-12dp',
        icon: 'size-24dp'
      },
      lg: {
        base: 'p-16dp',
        icon: 'size-32dp'
      },
      xl: {
        base: 'p-20dp',
        icon: 'size-48dp'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

/** Export type alias for variant props and slots */
export type IconFrameVariantProps = VariantProps<typeof iconFrame>;
export type IconFrameSlots = keyof ReturnType<typeof iconFrame>;
