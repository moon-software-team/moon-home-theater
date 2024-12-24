/** Dependencies */
import { tv, VariantProps } from 'tailwind-variants';

/** Create the tailwind variant for the contentBlock component */
export const contentBlock = tv({
  slots: {
    base: 'select-none flex flex-col',
    heading: 'flex flex-col',
    title: 'text-on-surface',
    subtitle: 'text-on-surface/60',
    description: 'text-on-surface/80',
    extra: 'flex flex-row gap-8dp items-center'
  },
  variants: {
    size: {
      small: {
        base: 'gap-8dp',
        title: 'typo-title-md',
        subtitle: 'typo-body-sm',
        description: 'typo-body-sm'
      },
      medium: {
        base: 'gap-12dp',
        heading: 'gap-2dp',
        title: 'typo-title-lg',
        subtitle: 'typo-body-md',
        description: 'typo-body-md'
      },
      large: {
        base: 'gap-16dp',
        heading: 'gap-4dp',
        title: 'typo-headline-md',
        subtitle: 'typo-body-lg',
        description: 'typo-body-lg'
      }
    },
    alignment: {
      left: {
        base: 'text-start',
        extra: 'justify-start'
      },
      center: {
        base: 'text-center',
        extra: 'justify-center'
      },
      right: {
        base: 'text-end',
        extra: 'justify-end'
      }
    }
  },
  defaultVariants: {
    size: 'medium',
    alignment: 'left'
  }
});

/** Export type alias for variant props and slots */
export type ContentBlockVariantProps = VariantProps<typeof contentBlock>;
export type ContentBlockSlots = keyof ReturnType<typeof contentBlock>;
