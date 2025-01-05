/** Dependencies */
import plugin from 'tailwindcss/plugin';
import { addBaseColors, extendColors } from './colors';
import { extendAspectRatio } from './aspect-ratio';
import { pixelDensitySizes } from './sizing';
import { typographies } from './typography';
import { variants } from './variants';
import { scrollbar } from './scrollbar';
import { transitions } from './transition';
import { defaultBoxShadow } from './inner-border';
import { animation, keyframes } from './animation';

/** Create the Moon Tailwind plugin */
export const MoonTwPlugin = () => {
  return plugin(
    ({ addUtilities, addBase, addVariant, matchUtilities, theme, corePlugins }) => {
      /** Add the base colors based on the dark/light theme */
      addBase(addBaseColors());

      /** Add the typographies of Moon Home Theater */
      addUtilities(typographies);

      /** Add utilities for hidding/showing the scrollbar */
      addUtilities(scrollbar);

      /** Add utilities for the transitions */
      addUtilities(transitions);

      /** Adding base for inner border */
      addBase({
        'inner-border': {
          '--tw-inner-border-color': theme('borderColor.DEFAULT', 'currentColor')
        }
      });

      /** Adding utilities for inner border size */
      matchUtilities(
        {
          'inner-border': (value) => ({
            '@defaults inner-border': {},
            '--tw-inner-border-width': value,
            '--tw-inner-border-shadow':
              'inset 0 0 0 var(--tw-inner-border-width) var(--tw-inner-border-color)',
            'box-shadow': defaultBoxShadow
          })
        },
        {
          type: ['line-width', 'length'],
          values: theme('borderWidth')
        }
      );

      /** Adding utilities for inner border color */
      matchUtilities(
        {
          'inner-border': (value) => ({
            '--tw-inner-border-color': value
          })
        },
        {
          type: ['color', 'any'],
          values: (({ DEFAULT: _, ...colors }) => colors)(theme('borderColor'))
        }
      );

      /* Overrides to mitigate precedence issues */
      if (corePlugins('boxShadow')) {
        matchUtilities(
          { shadow: () => ({ 'box-shadow': defaultBoxShadow }) },
          { values: theme('boxShadow'), type: ['shadow'] }
        );
      }

      /* Overrides to mitigate precedence issues */
      if (corePlugins('ringWidth')) {
        matchUtilities(
          { ring: () => ({ 'box-shadow': defaultBoxShadow }) },
          { values: theme('ringWidth'), type: 'length' }
        );
      }

      /** Add all the variants */
      for (const key of Object.keys(variants) as Array<keyof typeof variants>) {
        addVariant(key, variants[key]);
      }
    },
    {
      darkMode: 'class',
      theme: {
        extend: {
          keyframes,
          animation,
          colors: extendColors,
          aspectRatio: extendAspectRatio,
          spacing: pixelDensitySizes,
          borderRadius: pixelDensitySizes,
          borderWidth: pixelDensitySizes
        }
      }
    }
  );
};
