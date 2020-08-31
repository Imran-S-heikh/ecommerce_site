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
import Blog from './pages/Blog.page';
import SingleBlog from './pages/SingleBlog.page';
import Signin from './pages/Signin.page';
import Signup from './pages/Signup.page';
import Cart from './pages/Cart.page';
import Dashboard from './pages/Dashboard.page';




function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
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
          {/* <Footer /> */}
        </RecoilRoot>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
