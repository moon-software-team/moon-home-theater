/** Dependencies */
import { ThemeColors } from '../colors';

/**
 * Add a style element into the head with the theme colors
 * @param colors The colors to add into the DOM
 */
export const createThemeColorAttribute = (colors: ThemeColors): void => {
  /** Try getting the previous style element */
  var element = document.querySelector('style#moon-theme');

  /** If the element doesn't exists, create it */
  if (!element) {
    element = document.createElement('style');
    /** Set the id of the element */
    element.id = 'moon-theme';
  }

  /** Combine all the colors */
  const combined = Object.keys(colors)
    .map((key) => `--color-${key}: ${colors[key as keyof ThemeColors]}`)
    .join(';');

  /** Set the content of the style element in a compact form */
  element.textContent = `:root{${combined}}`;

  /** Append the child on the head */
  document.querySelector('head')?.appendChild(element);
};
