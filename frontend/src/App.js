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
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/signup">
            <Header />
            <Signup />
          </Route>
          <Route path="/signin">
            <Header />
            <Signin />
          </Route>
          <Route path="/shop" exact>
            <Header />
            <Shop />
          </Route>
          <Route path="/single" exact>
            <Header />
            <Single />
          </Route>
          <Route path="/blog" exact>
            <Header />
            <Blog />
          </Route>
          <Route path="/blogsingle" exact>
            <Header />
            <SingleBlog />
          </Route>
          <Route path="/cart" exact>
            <Header />
            <Cart />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default ()=>(
  <RecoilRoot>
    <App/>
  </RecoilRoot>
);
