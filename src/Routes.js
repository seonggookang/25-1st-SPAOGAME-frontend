import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ReviewInput from './components/ReviewInput/ReviewInput';
import SubjectList from './components/SubjectList/SubjectList';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Basket from './pages/Basket';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/subject" component={SubjectList} />
          <Route path="/subjectdetail" component={ProductDetail} />
          <Route path="/review" component={ReviewInput} />
          <Route exact path="/users/signin" component={Login} />
          <Route exact path="/users/signup" component={Signup} />
          <Route exact path="/baskets" component={Basket} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
