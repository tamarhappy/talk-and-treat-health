import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/profile/Profile';
import Consult from './components/consult/Consult';
import Pharmacy from './components/pharmacy/Pharmacy';
import Footer from './components/footer/Footer';
import Checkout from './components/checkout/Checkout';
import Contacts from './components/contacts/Contacts';


const App = () => {
   return (
     <div>
      <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/' exact >
        <Redirect to='/home' />
      </Route>
     <Route path='/home'>
      <Navigation />
      <Home />
     </Route>
     <Route path='/dashboard'>
      <Navigation />
      <Dashboard />
     </Route>
     <Route path='/profile'>
      <Navigation />
      <Profile />
     </Route>
     <Route path='/consult'>
      <Navigation />
      <Consult />
     </Route>
     <Route path='/pharmacy'>
      <Navigation />
      <Pharmacy />
     </Route>
     <Route path='/contacts'>
      <Navigation />
      <Contacts />
     </Route>
     <Route path='/checkout'>
      <Checkout />
     </Route>
    <Footer />
    </Switch>
     </div>
   );
};

export default App;
