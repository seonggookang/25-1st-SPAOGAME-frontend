import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './pages/Signup';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/users/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
