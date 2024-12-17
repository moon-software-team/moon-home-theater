/** Dependencies */
import { JSX, StrictMode } from 'react';
import { MoonThemeProvider } from '@moon/theme';
import { HelloWorld } from './hello';

/** Export the default App page */
export const App = (): JSX.Element => {
  return (
    <StrictMode>
      <MoonThemeProvider>
        <HelloWorld />
      </MoonThemeProvider>
    </StrictMode>
  );
};
