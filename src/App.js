import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/profile/Profile';


const App = () => {
   return (
     <div>
     <Route path='/home'>
      <Home />
     </Route>
     <Route path='/login'>
      <Login />
     </Route>
     <Route path='/dashboard'>
      <Dashboard />
     </Route>
     <Route path='/profile'>
      <Profile />
     </Route>
     </div>
   );
}

export default App;
