import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/users/signin" component={Login} />
          {/* <Route exact path="/users/signup" component={Signup} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
