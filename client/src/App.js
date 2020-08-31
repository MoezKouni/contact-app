import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Users from './pages/Users';
import AddUser from './pages/AddUser';
import PublicUsers from './pages/PublicUsers';
import Navbar from './components/Navbar';
import PersonalInformation from './pages/PersonalInformation';
import RegisterInformation from './pages/RegisterInformation';
import Confirm from './pages/Confirm';
import PrivateRoute from './PrivateRoute'
import setTokenHeader from './utils/setTokenHeader'
import SingleUser from './pages/SingleUser';

import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'

if(localStorage.token){
  setTokenHeader(localStorage.token)
}

const App = () => {
  const [information, setInformation] = useState({
    firstname: '',
    lastname: '',
    age: '',
    sexe: '',
    address: '',
    email: '',
    password: '',
    phone: ''
});

  const location = useLocation()
  const auth = useSelector(state => state.auth)
  
  const handleChange = e => {
    setInformation({...information, [e.target.name]: e.target.value})
  }
 
  return (
    <>
      {(location.pathname !== "/" && auth.user) && <Navbar />}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login} />
          <Route path="/perso-register">
            <PersonalInformation handleChange={handleChange} information={information}/>
          </Route>
          <Route path="/register">
            <RegisterInformation handleChange={handleChange} information={information}/>
          </Route>
          <Route path="/confirm">
            <Confirm information={information}/>
          </Route>
          <Route path="/users">
            <PrivateRoute component={Users}/>
          </Route>
          <Route path="/user/:id">
            <SingleUser />
          </Route>
          <Route path="/add">
            <AddUser />
          </Route>
          <Route path="/public">
            <PublicUsers />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
