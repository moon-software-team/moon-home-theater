/** Dependencies */
import { JSX, StrictMode } from 'react';
import { MoonThemeProvider } from '@moon/theme';

/** Export the default App page */
export const App = (): JSX.Element => {
  return (
    <StrictMode>
      <MoonThemeProvider>
        <h1>Hello World</h1>
      </MoonThemeProvider>
    </StrictMode>
  );
};
