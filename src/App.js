import React from 'react';
import LoginForm from './components/Form/forms';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard';
import UserForm from './components/UserDataForm/userData';


 const  App = () =>{
      return(
          <BrowserRouter>
                <Route exact path='/' component={LoginForm} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/userform' component ={UserForm} />
          </BrowserRouter>
      );
  }

  export default App;