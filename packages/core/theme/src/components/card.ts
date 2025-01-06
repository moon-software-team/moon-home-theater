/** Dependencies */
import { tv, VariantProps } from 'tailwind-variants';

/** Create the tailwind variant for the card component */
export const card = tv({
  slots: {
    base: 'group w-full flex transition-all',
    image: 'bg-cover bg-center transition-all',
    scrim: 'absolute inset-0 rounded-12dp',
    content: 'w-full'
  },
  variants: {
    disabled: {
      true: {
        base: 'cursor-not-allowed opacity-60'
      },
      false: {
        base: 'cursor-pointer'
      }
    },
    type: {
      'standard': {
        base: 'flex-col gap-8dp',
        image: 'w-full rounded-12dp'
      },
      'classic': {
        base: 'flex-col bg-surface-variant rounded-8dp relative',
        image: 'w-full rounded-t-8dp',
        content: 'px-12dp py-12dp'
      },
      'compact': {
        base: 'relative aspect-video',
        image: 'absolute w-full rounded-12dp inset-0',
        content: 'absolute p-12dp h-full flex flex-col justify-end'
      },
      'wide-standard': {
        base: 'flex-row',
        content: 'px-16dp py-12dp relative overflow-hidden',
        image: 'w-196dp rounded-12dp'
      },
      'wide-classic': {
        base: 'flex-row bg-surface-variant relative rounded-12dp overflow-hidden',
        content: 'px-16dp py-12dp relative overflow-hidden',
        image: 'w-196dp'
      }
    },
    ratio: {
      '16:9': {
        image: 'aspect-video'
      },
      '1:1': {
        image: 'aspect-square'
      },
      '2:3': {
        image: 'aspect-poster'
      }
    }
  },
  defaultVariants: {
    type: 'standard',
    ratio: '16:9',
    disabled: false
  },
  compoundVariants: [
    {
      type: ['standard', 'classic', 'compact', 'wide-classic'],
      disabled: false,
      class: {
        base: 'hocus:scale-110 active:!scale-100'
      }
    },
    {
      type: ['standard', 'wide-standard'],
      disabled: false,
      class: {
        image: 'group-hocus:inner-border-2dp group-hocus:inner-border-outline'
      }
    },
    {
      type: 'compact',
      disabled: false,
      class: {
        scrim: 'group-hocus:inner-border-2dp group-hocus:inner-border-outline'
      }
    },
    {
      type: 'wide-standard',
      disabled: false,
      class: {
        image: 'group-hocus:scale-110 group-active:!scale-100'
      }
    }
  ]
});

/** Export type alias for variant props and slots */
export type CardVariantProps = VariantProps<typeof card>;
export type CardSlots = keyof ReturnType<typeof card>;
