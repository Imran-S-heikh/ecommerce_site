import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
import Home from './pages/Home.page';
import { RecoilRoot } from 'recoil';
import Shop from './pages/Shop.page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Single from './pages/Single.page';
import Header from './components/Header.component';
import Footer from './components/Footer.component';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Header/>
          <Switch>
            <Route path="/shop" exact>
              <Shop />
            </Route>
            <Route path="/single" exact>
              <Single />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer/>
        </RecoilRoot>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
