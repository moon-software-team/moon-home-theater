/** Dependencies */
import { JSX, useEffect } from 'react';
import { useTheme } from '@moon/theme';

/** Export a HelloWorld page */
export const HelloWorld = (): JSX.Element => {
  const { toggleTheme, theme, colors } = useTheme();

  /** Effect to handle keydown events */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        toggleTheme();
      }
    }

    /** Add event listener */
    window.addEventListener('keydown', handleKeyDown);

    /** Cleanup event listener on component unmount */
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [toggleTheme]);

  return (
    <h1>Hello World</h1>
  );
};
