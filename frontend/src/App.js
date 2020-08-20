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




function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Header />
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/shop" exact>
              <Shop/>
            </Route>
            <Route path="/single" exact>
              <Single />
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/blogsingle" exact>
              <SingleBlog/>
            </Route>
            <Route path="/cart" exact>
              <Cart/>
            </Route>
            <Route
              path="/"
              render={
                ()=><Home/>
              }
            />
          </Switch>
          <Footer />
        </RecoilRoot>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
