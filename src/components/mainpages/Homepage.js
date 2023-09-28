import React from 'react';
import Navbar from '../Navbar';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Aboutus from '../pages/Aboutus';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Login from '../pages/Login';

function Homepage() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={Aboutus} />
          <Route path='/services' component={Services} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default Homepage;