import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/LoginForm/Login';
import Registration from './Components/RegisterForm/register';
import { BrowserRouter, Route } from 'react-router-dom';
import Category from './Components/Catalog/Category/Category';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Navbar />

        <div className="app__wpapper__content">
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
          <Route path="/catalog" component={Category} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
