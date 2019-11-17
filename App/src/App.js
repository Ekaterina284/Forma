import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Registration from './Components/RegisterForm/register';
import { Route } from 'react-router-dom';
import Film from './Components/AddFilms/addfilm';
import WebPage from './Components/Catalog/Catalog/Catalog';
import Login from './Components/LoginForm/Auth';

const App = props => {
  return (
    <div>
      <Navbar />
      <Route exact path="/register" render={() => <Registration />} />
      <Route exact path="/catalog" render={() => <WebPage />} />
      <Route exact path="/add" render={() => <Film />} />
      <Route exact path="/" render={() => <Login />} />
      <Route exact path="/login" render={() => <Login />} />
    </div>
  );
};

export default App;
