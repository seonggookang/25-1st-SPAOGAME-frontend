import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';
import SubjectList from './components/SubjectList/SubjectList';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/subject" component={SubjectList} />
          <Route path="/subjectdetail" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
