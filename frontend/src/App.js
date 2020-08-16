import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
import Home from './pages/Home.page';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
