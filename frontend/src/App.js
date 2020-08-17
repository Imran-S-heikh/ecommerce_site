import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
import Home from './pages/Home.page';
import { RecoilRoot } from 'recoil';
import Single from './pages/Single.page';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        {/* <Home /> */}
        <Single/>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
