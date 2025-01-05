/** Dependencies */
import { tv, VariantProps } from 'tailwind-variants';

/** Create the tailwind variant for the long button component */
export const longButton = tv({
  slots: {
    base: 'group flex gap-12dp flex-row items-center py-12dp px-16dp bg-surface-variant/40 rounded-12dp overflow-hidden cursor-pointer hocus:bg-inverse-surface hocus:scale-110 active:!scale-100 transition-all',
    content: 'flex flex-col select-none',
    title: 'typo-title-md text-inverse-surface group-hocus:text-inverse-on-surface',
    subtitle: 'typo-body-sm text-inverse-surface/80 group-hocus:text-inverse-on-surface/80',
    icon: 'fill-inverse-surface group-hocus:fill-inverse-on-surface'
  },
  variants: {}
});

/** Export type alias for variant props and slots */
export type LongButtonVariantProps = VariantProps<typeof longButton>;
export type LongButtonSlots = keyof ReturnType<typeof longButton>;
