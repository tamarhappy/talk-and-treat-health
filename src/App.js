import React, { useContext, useEffect } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import { auth } from './firebase';
import Navigation from './components/layout/Navigation';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/profile/Profile';
import Consult from './components/consult/Consult';
import ConsultDetails from './components/consult/ConsultDetails';
import Pharmacy from './components/pharmacy/Pharmacy';
import Footer from './components/footer/Footer';
import Checkout from './components/checkout/Checkout';
import Contacts from './components/contacts/Contacts';
import Gastro from './components/dashboard/gastro/Gastro';
import Cardio from './components/dashboard/cardio/Cardio';
import Payment from './components/payment/Payment';
import FeeContext from './components/context/feeContext';

const promise = loadStripe('pk_test_51N3QrZFPKuANCBaTGFfdXixxUD9NiVlX3z7Baa7lkoZ3CAtrwwO4OP6HVUDZUgQaZ5whgEONdCPzcelhuLGjc2Fw003OwLbefB');

const App = () => {
   const feeContext = useContext(FeeContext);
   const {setUser} = feeContext;

   useEffect(() => {
     auth.onAuthStateChanged((authUser) => {
       console.log('User is ->', authUser);

       if(authUser) {
        setUser(authUser);
       } else {
         setUser(null);
       }
     });
   }, []);

   return (
     <div>
      <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/' exact >
        <Redirect to='/dashboard' />
      </Route>
     <Route path='/home'>
      <Navigation />
      <Home />
      <Footer />
     </Route>
     <Route path='/dashboard'>
      <Navigation />
      <Dashboard />
     </Route>
     <Route path='/gastro'>
      <Navigation />
      <Gastro />
      <Footer />
     </Route>
     <Route path='/cardio'>
      <Navigation />
      <Cardio />
      <Footer />
     </Route>
     <Route path='/profile'>
      <Navigation />
      <Profile />
      <Footer />
     </Route>
     <Route path='/consult' exact>
      <Navigation />
      <Consult />
     </Route>
     <Route path='/consult/:id'>
      <ConsultDetails />
     </Route>
     <Route path='/pharmacy'>
      <Navigation />
      <Pharmacy />
     </Route>
     <Route path='/contacts'>
      <Navigation />
      <Contacts />
      <Footer />
     </Route>
     <Route path='/checkout'>
      <Checkout />
     </Route>
     <Route path='/payment'>
      <Elements stripe={promise}>
        <Payment />
      </Elements>
     </Route>
    </Switch>
     </div>
   );
};

export default App;
