/** Dependencies */
import { tv, VariantProps } from 'tailwind-variants';

/** Create the tailwind variant for the long button component */
export const longButton = tv({
  slots: {
    base: 'group inline-flex w-full gap-12dp flex-row items-center py-12dp px-16dp bg-surface-variant/40 rounded-12dp overflow-hidden cursor-pointer hocus:bg-inverse-surface hocus:scale-110 active:!scale-100 transition-all',
    content: 'flex flex-col select-none w-full',
    title: 'typo-title-md text-inverse-surface group-hocus:text-inverse-on-surface w-full',
    subtitle:
      'typo-body-sm text-inverse-surface/80 group-hocus:text-inverse-on-surface/80 text-wrap whitespace-normal w-full break-all',
    icon: 'fill-inverse-surface group-hocus:fill-inverse-on-surface'
  },
  variants: {}
});

/** Export type alias for variant props and slots */
export type LongButtonVariantProps = VariantProps<typeof longButton>;
export type LongButtonSlots = keyof ReturnType<typeof longButton>;
