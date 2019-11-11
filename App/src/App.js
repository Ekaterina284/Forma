import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/LoginForm/Login';
import Registration from './Components/RegisterForm/register';
import { BrowserRouter, Route } from 'react-router-dom';
import Catalog from './Components/Catalog/catalog';
import Film from './Components/AddFilms/addfilm';

const App = props => {
  return (
    <BrowserRouter>
      <Navbar />

      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/register" render={() => <Registration />} />
      <Route
        exact
        path="/catalog"
        render={() => (
          <Catalog
            CategoryPage={props.state.CategoryPage}
            dispatch={props.dispatch}
            MoviesPage={props.state.MoviesPage}
          />
        )}
      />
      <Route exact path="/add" render={() => <Film />} />
    </BrowserRouter>
  );
};

export default App;
