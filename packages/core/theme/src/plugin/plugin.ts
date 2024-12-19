/** Dependencies */
import plugin from 'tailwindcss/plugin';
import { addBaseColors, extendColors } from './colors';
import { extendAspectRatio } from './aspect-ratio';
import { pixelDensitySizes } from './sizing';
import { typographies } from './typography';
import { variants } from './variants';

/** Create the Moon Tailwind plugin */
export const MoonTwPlugin = () => {
  return plugin(
    ({ addUtilities, addVariant, addBase }) => {
      /** Add the base colors based on the dark/light theme */
      addBase(addBaseColors());

      /** Add the typographies of Moon Home Theater */
      addUtilities(typographies);

      /** Add all the variants */
      for (const key of Object.keys(variants) as Array<keyof typeof variants>) {
        addVariant(key, variants[key]);
      }
    },
    {
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
