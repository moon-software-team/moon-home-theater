/** Dependencies */
import { tv, VariantProps } from 'tailwind-variants';

/** Create the tailwind variant for the button component */
export const button = tv({
  slots: {
    base: 'group px-16dp py-10dp rounded-full flex justify-center items-center gap-6dp cursor-pointer transition-all outline-none',
    icon: 'fill-inverse-surface',
    label: 'text-inverse-surface typo-label-lg'
  },
  variants: {
    disabled: {
      true: {
        base: 'cursor-not-allowed bg-transparent hocus:inner-border-1.5dp hocus:inner-border-on-surface-variant/20',
        icon: 'fill-inverse-surface/40',
        label: 'text-inverse-surface/40'
      },
      false: {
        base: 'hocus:scale-110 hocus:bg-inverse-surface active:!scale-100',
        icon: 'group-hocus:fill-inverse-on-surface',
        label: 'group-hocus:text-inverse-on-surface'
      }
    },
    outlined: {
      true: {
        base: 'inner-border-1.5dp'
      },
      false: {}
    }
  },
  defaultVariants: {
    disabled: false,
    outlined: false
  },
  compoundVariants: [
    {
      disabled: false,
      outlined: false,
      class: {
        base: 'bg-surface-variant'
      }
    },
    {
      disabled: true,
      outlined: false,
      class: {
        base: 'bg-surface-variant/40 active:!inner-border-0'
      }
    },
    {
      disabled: false,
      outlined: true,
      class: {
        base: 'inner-border-on-surface-variant hocus:inner-border-outline'
      }
    },
    {
      disabled: true,
      outlined: true,
      class: {
        base: 'inner-border-on-surface-variant/20 hocus:bg-surface-variant/20'
      }
    }
  ]
});

/** Export type alias for variant props and slots */
export type ButtonVariantProps = VariantProps<typeof button>;
export type ButtonSlots = keyof ReturnType<typeof button>;
