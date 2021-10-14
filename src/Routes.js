import React from 'react';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Basket from './pages/basket/Basket';
import Orderlists from './components/Orderlists';
import Orderproduct from './pages/basket/Orderproduct';

class Routes extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Router>
          <div className="header_fixed" style={{ marginTop: '75px' }}>
            <Switch>
              <Route path="/Main" component={Main} />
              <Route exact path="/users/signin" component={Login} />
              <Route exact path="/users/signup" component={Signup} />
              <Route exact path="/baskets" component={Basket} />
              <Route exact path="/baskets/orderlists" component={Orderlists} />
              <Route
                exact
                path="/baskets/orderproduct"
                component={Orderproduct}
              />
            </Switch>
          </div>
        </Router>
        <Footer />
      </>
    );
  }
}

export default Routes;
