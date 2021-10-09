import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import Login from '.pages/Login';
import Signup from './pages/Signup';
=======
import Login from './pages/Login';
>>>>>>> feature/loginlayout

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
<<<<<<< HEAD
          {/*<Route exact path="/users/login" componetn={Login} />*/}
          <Route exact path="/users/signup" component={Signup} />
=======
          <Route exact path="/users/signin" component={Login} />
          {/* <Route exact path="/users/signup" component={Signup} /> */}
>>>>>>> feature/loginlayout
        </Switch>
      </Router>
    );
  }
}

export default Routes;
