/** Dependencies */
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SemanticBaseColors, semanticColors, ThemeColors } from './colors';
import { Locale } from './i18n';

/** Utility type for the theme */
type Theme = keyof SemanticBaseColors;

/** Theme context type */
interface ThemeContextType {
  /** The theme of the context */
  theme: Theme;
  /** The colors of the theme */
  colors: ThemeColors;
  /** The locale of the context */
  locale: Locale;
  /** Utility function to togglet the theme */
  toggleTheme: () => void;
}

/** Create the context */
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  locale: 'en',
  colors: semanticColors.dark,
  toggleTheme: () => undefined
});

/**
 * Utility hook to use the theme
 */
export const useTheme = (): ThemeContextType => {
  /** Try using the theme context */
  const context = useContext(ThemeContext);

  /** If the context has not been set, error */
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  /** Otherwise return the context */
  return context;
};

/** Define some props for the theme providers */
interface ThemeProviderProps {
  children: ReactNode;
  theme?: Theme;
  locale?: Locale;
}

/** Create the React theme provider */
export const MoonThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme: initialTheme = 'dark',
  locale = 'en'
}) => {
  /** Use the hook for the theme */
  const [theme, setTheme] = useState<Theme>(initialTheme);

  /** Define the toggle theme function */
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  /**  Get the colors for the theme */
  const colors = theme === 'light' ? semanticColors.light : semanticColors.dark;

  /** Define the context value */
  const value = {
    theme,
    colors,
    locale,
    toggleTheme
  };

  /** Return the provider */
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
