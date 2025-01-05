/** Dependencies */
import { tv, VariantProps } from 'tailwind-variants';

/** Create the tailwind variant for the background image component */
export const backgroundImage = tv({
  slots: {
    base: 'select-none relative w-full aspect-video',
    image: 'absolute inset-0 bg-cover bg-center',
    scrim: 'absolute inset-0'
  },
  variants: {
    gradient: {
      none: {},
      radial: {},
      bottom: {}
    }
  },
  defaultVariants: {
    gradient: 'none'
  }
});

/** Export type alias for variant props and slots */
export type BackgroundImageVariantProps = VariantProps<typeof backgroundImage>;
export type BackgroundImageSlots = keyof ReturnType<typeof backgroundImage>;
