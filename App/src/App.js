import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/LoginForm/Login';
import Registration from './Components/RegisterForm/register';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Navbar />

        <div className="app__wpapper__content">
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
