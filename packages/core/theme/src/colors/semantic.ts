/** Dependencies */
import { SemanticBaseColors, ThemeColors } from './types';

/** Colors */
import { primary } from './primary';
import { secondary } from './secondary';
import { tertiary } from './tertiary';
import { error } from './error';
import { neutral } from './neutral';
import { neutralVariant } from './neutral-variant';

/** Export the colors for the light theme */
export const themeColorsLight: ThemeColors = {
  /** Primary Colors */
  'primary': primary['40'],
  'on-primary': primary['100'],
  'primary-container': primary['90'],
  'on-primary-container': primary['10'],
  'primary-fixed': primary['90'],
  'on-primary-fixed': primary['10'],
  'primary-fixed-dim': primary['80'],
  'on-primary-fixed-variant': primary['30'],
  'inverse-primary': primary['80'],

  /** Secondary Colors */
  'secondary': secondary['40'],
  'on-secondary': secondary['100'],
  'secondary-container': secondary['90'],
  'on-secondary-container': secondary['10'],
  'secondary-fixed': secondary['90'],
  'on-secondary-fixed': secondary['10'],
  'secondary-fixed-dim': secondary['80'],
  'on-secondary-fixed-variant': secondary['30'],

  /** Tertiary Colors */
  'tertiary': tertiary['40'],
  'on-tertiary': tertiary['100'],
  'tertiary-container': tertiary['90'],
  'on-tertiary-container': tertiary['10'],
  'tertiary-fixed': tertiary['90'],
  'on-tertiary-fixed': tertiary['10'],
  'tertiary-fixed-dim': tertiary['80'],
  'on-tertiary-fixed-variant': tertiary['30'],

  /** Error colors */
  'error': error['40'],
  'on-error': error['100'],
  'error-container': error['90'],
  'on-error-container': error['10'],
  'error-fixed': error['90'],
  'on-error-fixed': error['10'],
  'error-fixed-dim': error['80'],
  'on-error-fixed-variant': error['30'],

  /** Surface colors */
  'surface': neutral['100'],
  'on-surface': neutral['10'],
  'surface-variant': neutralVariant['90'],
  'on-surface-variant': neutralVariant['30'],
  'surface-dim': neutral['87'],
  'surface-bright': neutral['100'],
  'surface-container-lowest': neutral['100'],
  'surface-container-low': neutral['96'],
  'surface-container': neutral['94'],
  'surface-container-high': neutral['92'],
  'surface-container-highest': neutral['90'],
  'inverse-surface': neutral['20'],
  'inverse-on-surface': neutral['95'],

  /** Misc colors */
  'outline': neutralVariant['50'],
  'outline-variant': neutralVariant['80'],
  'scrim': neutral['0'],
  'shadow': neutral['0'],
  'background': neutral['100'],
  'on-background': neutral['10']
};

/** Export the colors for the dark theme */
export const themeColorsDark: ThemeColors = {
  /** Primary Colors */
  'primary': primary['80'],
  'on-primary': primary['20'],
  'primary-container': primary['30'],
  'on-primary-container': primary['90'],
  'primary-fixed': primary['90'],
  'on-primary-fixed': primary['10'],
  'primary-fixed-dim': primary['80'],
  'on-primary-fixed-variant': primary['30'],
  'inverse-primary': primary['40'],

  /** Secondary Colors */
  'secondary': secondary['80'],
  'on-secondary': secondary['20'],
  'secondary-container': secondary['30'],
  'on-secondary-container': secondary['90'],
  'secondary-fixed': secondary['90'],
  'on-secondary-fixed': secondary['10'],
  'secondary-fixed-dim': secondary['80'],
  'on-secondary-fixed-variant': secondary['30'],

  /** Tertiary Colors */
  'tertiary': tertiary['80'],
  'on-tertiary': tertiary['20'],
  'tertiary-container': tertiary['30'],
  'on-tertiary-container': tertiary['90'],
  'tertiary-fixed': tertiary['90'],
  'on-tertiary-fixed': tertiary['10'],
  'tertiary-fixed-dim': tertiary['80'],
  'on-tertiary-fixed-variant': tertiary['30'],

  /** Error colors */
  'error': error['80'],
  'on-error': error['20'],
  'error-container': error['30'],
  'on-error-container': error['90'],
  'error-fixed': error['90'],
  'on-error-fixed': error['10'],
  'error-fixed-dim': error['80'],
  'on-error-fixed-variant': error['30'],

  /** Surface colors */
  'surface': neutral['6'],
  'on-surface': neutral['90'],
  'surface-variant': neutralVariant['30'],
  'on-surface-variant': neutralVariant['80'],
  'surface-dim': neutral['6'],
  'surface-bright': neutral['24'],
  'surface-container-lowest': neutral['4'],
  'surface-container-low': neutral['10'],
  'surface-container': neutral['12'],
  'surface-container-high': neutral['17'],
  'surface-container-highest': neutral['22'],
  'inverse-surface': neutral['90'],
  'inverse-on-surface': neutral['20'],

  /** Misc colors */
  'outline': neutralVariant['60'],
  'outline-variant': neutralVariant['30'],
  'scrim': neutral['0'],
  'shadow': neutral['0'],
  'background': neutral['6'],
  'on-background': neutral['90']
};

/** Export the semantic colors */
export const semanticColors: SemanticBaseColors = {
  light: themeColorsLight,
  dark: themeColorsDark
};
