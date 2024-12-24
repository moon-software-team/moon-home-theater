/** Dependencies */
import plugin from 'tailwindcss/plugin';
import { addBaseColors, extendColors } from './colors';
import { extendAspectRatio } from './aspect-ratio';
import { pixelDensitySizes } from './sizing';
import { typographies } from './typography';
import { variants } from './variants';
import { scrollbar } from './scrollbar';
import { transitions } from './transition';

/** Create the Moon Tailwind plugin */
export const MoonTwPlugin = () => {
  return plugin(
    ({ addUtilities, addBase, addVariant }) => {
      /** Add the base colors based on the dark/light theme */
      addBase(addBaseColors());

      /** Add the typographies of Moon Home Theater */
      addUtilities(typographies);

      /** Add utilities for hidding/showing the scrollbar */
      addUtilities(scrollbar);

      /** Add utilities for the transitions */
      addUtilities(transitions);

      /** Add all the variants */
      for (const key of Object.keys(variants) as Array<keyof typeof variants>) {
        addVariant(key, variants[key]);
      }
    },
    {
      darkMode: 'class',
      theme: {
        extend: {
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
