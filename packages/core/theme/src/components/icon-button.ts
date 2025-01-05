/** Dependencies */
import { tv, VariantProps } from 'tailwind-variants';

/** Create the tailwind variant for the icon button component */
export const iconButton = tv({
  slots: {
    base: 'group flex justify-center items-center transition-all rounded-full',
    icon: ''
  },
  variants: {
    disabled: {
      true: {
        base: 'cursor-not-allowed',
        icon: 'fill-inverse-surface/40'
      },
      false: {
        base: 'cursor-pointer hocus:scale-110 hocus:bg-inverse-surface active:!scale-100',
        icon: 'fill-inverse-surface/80 group-hocus:fill-inverse-on-surface'
      }
    },
    outlined: {
      true: {},
      false: {}
    },
    size: {
      small: {
        base: 'p-6dp',
        icon: 'size-16dp'
      },
      medium: {
        base: 'p-10dp',
        icon: 'size-20dp'
      },
      large: {
        base: 'p-14dp',
        icon: 'size-28dp'
      }
    }
  },
  defaultVariants: {
    disabled: false,
    outlined: false,
    size: 'medium'
  },
  compoundVariants: [
    {
      disabled: false,
      outlined: false,
      class: {
        base: 'bg-surface-variant/80'
      }
    },
    {
      disabled: true,
      outlined: false,
      class: {
        base: 'bg-surface-variant/40 hocus:bg-surface-variant/20 hocus:inner-border-on-surface-variant/20 active:!inner-border-0 active:!bg-surface-variant/40'
      }
    },
    {
      disabled: true,
      outlined: false,
      size: 'small',
      class: {
        base: 'hocus:inner-border-1dp'
      }
    },
    {
      disabled: true,
      outlined: false,
      size: 'medium',
      class: {
        base: 'hocus:inner-border-1.5dp'
      }
    },
    {
      disabled: true,
      outlined: false,
      size: 'large',
      class: {
        base: 'hocus:inner-border-2dp'
      }
    },
    {
      disabled: false,
      outlined: true,
      class: {
        base: 'inner-border-on-surface-variant/40 hocus:inner-border-outline'
      }
    },
    {
      disabled: true,
      outlined: true,
      class: {
        base: 'inner-border-on-surface-variant/20 active:bg-surface-variant/20'
      }
    },
    {
      outlined: true,
      size: 'small',
      class: {
        base: 'inner-border-1dp'
      }
    },
    {
      outlined: true,
      size: 'medium',
      class: {
        base: 'inner-border-1.5dp'
      }
    },
    {
      outlined: true,
      size: 'large',
      class: {
        base: 'inner-border-2dp'
      }
    }
  ]
});

/** Export type alias for variant props and slots */
export type IconButtonVariantProps = VariantProps<typeof iconButton>;
export type IconButtonSlots = keyof ReturnType<typeof iconButton>;
