import React from 'react';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ReviewInput from './components/ReviewInput/ReviewInput';
import SubjectList from './components/SubjectList/SubjectList';
import UpDownBtn from './components/Main/UpDownBtn';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Basket from './pages/basket/Basket';
class Routes extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <UpDownBtn />
        <Router>
          <div className="header_fixed">
            <Switch>
              <Route path="/Main" component={Main} />
              <Route exact path="/products" component={SubjectList} />
              <Route exact path="/products/:id" component={ProductDetail} />
              <Route exact path="/review" component={ReviewInput} />
              <Route exact path="/users/signin" component={Login} />
              <Route exact path="/users/signup" component={Signup} />
              <Route exact path="/baskets" component={Basket} />
              <Route exact path="/productdetail" component={ProductDetail} />
              <Route exact path="/subjectlist" component={SubjectList} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </>
    );
  }
}
export default Routes;
