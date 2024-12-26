/** Dependencies */
import { tv, VariantProps } from 'tailwind-variants';

/** Create the tailwind variant for the tag component */
export const tag = tv({
  slots: {
    base: 'select-none inline-flex justify-center items-center px-8dp py-2dp gap-4dp rounded-full',
    label: 'text-on-surface-variant',
    icon: 'fill-on-surface-variant'
  },
  variants: {
    size: {
      default: {
        label: 'typo-label-sm',
        icon: 'size-10dp'
      },
      large: {
        label: 'typo-label-lg',
        icon: 'size-14dp'
      }
    },
    outlined: {
      true: {
        base: 'inner-border-1dp inner-border-surface-variant'
      },
      false: {
        base: 'bg-surface-variant'
      }
    }
  },
  defaultVariants: {
    size: 'default',
    outlined: false
  }
});

/** Export type alias for variant props and slots */
export type TagVariantProps = VariantProps<typeof tag>;
export type TagSlots = keyof ReturnType<typeof tag>;
