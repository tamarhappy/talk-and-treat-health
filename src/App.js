import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './components/Home';
import Homedetails from './components/Homedetails';
import Login from './components/Login';
import RegisterContext from './components/context/register/registerContext';

function App() {

  return (
    <>
    <Navigation />
    <main>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/homedetails'>
          <Homedetails />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <RegisterContext />
      </Switch>
    </main>
    </>
  );
}

export default App;
