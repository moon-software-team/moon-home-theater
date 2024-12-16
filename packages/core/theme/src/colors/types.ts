/** Color Scale Type */
export type ColorScale =
  | {
      0: string;
      4: string;
      6: string;
      10: string;
      12: string;
      17: string;
      20: string;
      22: string;
      24: string;
      30: string;
      40: string;
      50: string;
      60: string;
      70: string;
      80: string;
      87: string;
      90: string;
      92: string;
      94: string;
      95: string;
      96: string;
      99: string;
      100: string;
    }
  | string;

/** Export type for base color */
export type BaseColors = {
  'primary': ColorScale;
  'secondary': ColorScale;
  'tertiary': ColorScale;
  'error': ColorScale;
  'neutral': ColorScale;
  'neutral-variant': ColorScale;
};

/** Export themes colors */
export type ThemeColors = {
  /** Primary Colors */
  'primary': string;
  'on-primary': string;
  'primary-container': string;
  'on-primary-container': string;
  'primary-fixed': string;
  'on-primary-fixed': string;
  'primary-fixed-dim': string;
  'on-primary-fixed-variant': string;
  'inverse-primary': string;

  /** Secondary Colors */
  'secondary': string;
  'on-secondary': string;
  'secondary-container': string;
  'on-secondary-container': string;
  'secondary-fixed': string;
  'on-secondary-fixed': string;
  'secondary-fixed-dim': string;
  'on-secondary-fixed-variant': string;

  /** Tertiary Colors */
  'tertiary': string;
  'on-tertiary': string;
  'tertiary-container': string;
  'on-tertiary-container': string;
  'tertiary-fixed': string;
  'on-tertiary-fixed': string;
  'tertiary-fixed-dim': string;
  'on-tertiary-fixed-variant': string;

  /** Error colors */
  'error': string;
  'on-error': string;
  'error-container': string;
  'on-error-container': string;
  'error-fixed': string;
  'on-error-fixed': string;
  'error-fixed-dim': string;
  'on-error-fixed-variant': string;

  /** Surface colors */
  'surface': string;
  'on-surface': string;
  'surface-variant': string;
  'on-surface-variant': string;
  'surface-dim': string;
  'surface-bright': string;
  'surface-container-lowest': string;
  'surface-container-low': string;
  'surface-container': string;
  'surface-container-high': string;
  'surface-container-highest': string;
  'inverse-surface': string;
  'inverse-on-surface': string;

  /** Misc colors */
  'outline': string;
  'outline-variant': string;
  'scrim': string;
  'shadow': string;
  'background': string;
  'on-background': string;
};

/** Export all semantic themes */
export type SemanticBaseColors = {
  light: ThemeColors;
  dark: ThemeColors;
};
