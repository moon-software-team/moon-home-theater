/** Dependencies */
import { tv, VariantProps } from 'tailwind-variants';

/** Create the tailwind variant for the snackbar component */
export const snackbar = tv({
  slots: {
    base: 'select-none px-16dp py-12dp rounded-12dp bg-inverse-surface inline-flex flex-row items-center gap-8dp fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-28dp max-w-[60%] transition-all animate-slide-up',
    label: 'typo-label-large text-inverse-on-surface text-wrap whitespace-normal break-all'
  },
  variants: {}
});

/** Export type alias for variant props and slots */
export type SnackbarVariantProps = VariantProps<typeof snackbar>;
export type SnackbarSlots = keyof ReturnType<typeof snackbar>;
