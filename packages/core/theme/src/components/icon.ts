/** Dependencies */
import { tv, VariantProps } from 'tailwind-variants';

/** Create the tailwind variant for the icon component */
export const icon = tv({
  slots: {
    base: 'select-none'
  },
  variants: {}
});

/** Export type alias for variant props and slots */
export type IconVariantProps = VariantProps<typeof icon>;
export type IconSlots = keyof ReturnType<typeof icon>;
