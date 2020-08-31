import React, { useEffect } from 'react';
import { ThemeProvider, CssBaseline, unstable_createMuiStrictModeTheme } from '@material-ui/core';
// import { theme } from './theme';
import Home from './pages/Home.page';
import { RecoilRoot, useRecoilValue } from 'recoil';
import Shop from './pages/Shop.page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Single from './pages/Single.page';
import Header from './components/Header.component';
import Footer from './components/Footer.component';
import Blog from './pages/Blog.page';
import SingleBlog from './pages/SingleBlog.page';
import Signin from './pages/Signin.page';
import Signup from './pages/Signup.page';
import Cart from './pages/Cart.page';
import Dashboard from './pages/Dashboard.page';
import { darkModeState } from './recoil/atoms';
import { blue } from '@material-ui/core/colors';
import HideComponentOnRoute from './molecules/HideComponentOnRoute.mole';




function App() {

  const darkMode = useRecoilValue(darkModeState);

  const theme = unstable_createMuiStrictModeTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: blue.A400
      }
    }
  })

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HideComponentOnRoute route="/dashboard" >
          <Header />
        </HideComponentOnRoute>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/shop" exact>
            <Shop />
          </Route>
          <Route path="/single" exact>
            <Single />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blogsingle" exact>
            <SingleBlog />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <HideComponentOnRoute route="/dashboard" >
          <Footer />
        </HideComponentOnRoute>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default () => (
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
