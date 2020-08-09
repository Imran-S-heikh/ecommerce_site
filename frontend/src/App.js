import React from 'react';
import { ThemeProvider, Button } from '@material-ui/core';
import { theme } from './theme';
import Home from './pages/Home.page';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
