import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SubjectList from './components/SubjectList/SubjectList';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/subject" component={SubjectList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
