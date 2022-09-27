import React from 'react';
import { ThemeProvider } from 'styled-components';
import Homepage from './pages/Homepage';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
