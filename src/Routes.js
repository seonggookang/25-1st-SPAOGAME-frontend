import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Basket from './pages/Basket';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/users/signin" component={Login} />
          <Route exact path="/users/signup" component={Signup} />
          <Route exact path="/baskets" component={Basket} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
