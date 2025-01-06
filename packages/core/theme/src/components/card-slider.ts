/** Dependencies */
import { tv, VariantProps } from 'tailwind-variants';

/** Create the tailwind variant for the card slider component */
export const cardSlider = tv({
  slots: {
    base: 'flex'
  },
  variants: {
    direction: {
      column: {
        base: 'flex-col'
      },
      row: {
        base: 'flex-row whitespace-nowrap overflow-x-visible gap-20dp'
      }
    }
  },
  defaultVariants: {
    direction: 'row'
  }
});

/** Export type alias for variant props and slots */
export type CardSliderVariantProps = VariantProps<typeof cardSlider>;
export type CardSliderSlots = keyof ReturnType<typeof cardSlider>;
