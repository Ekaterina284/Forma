import React from 'react';

import Navbar from './Components/Navbar/Navbar';
import Registration from './Components/Registration/Registration';
import { Route } from 'react-router-dom';
import AddFilm from './Components/AddFilm/AddFilm';
import Catalog from './Components/Catalog/Catalog/Catalog';
import Login from './Components/Login/Login';

const App = props => {
  return (
    <div>
      <Route exact path="/login" render={() => <Navbar />} />
      <Route exact path="/register" render={() => <Registration />} />
      <Route exact path="/catalog" render={() => <Catalog />} />
      <Route exact path="/add" render={() => <AddFilm />} />
      <Route exact path="/" render={() => <Login />} />
      <Route exact path="/login" render={() => <Login />} />
    </div>
  );
};

export default App;
