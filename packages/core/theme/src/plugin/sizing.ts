/** Dependencies */
import { dp } from './utils';

/** Prepare a value to be populated */
export const pixelDensitySizes = {
  ...Array.from({ length: 961 })
    .map((_, i) => `${i}dp`)
    .reduce((acc: { [key: string]: string }, key, index) => {
      acc[key] = dp(index);
      return acc;
    }, {}),
  '1.5dp': dp(1.5)
};
