import * as React from 'react';
import { Route } from 'react-router';
import MapMovies from './containers/MapMovies';
import './App.css';

const routes = [{
  path: '/',
  component: MapMovies,
}];

const App = () => (
  <div className="App">
    {routes.map(route => (
      <Route exact key={route.path} path={route.path} component={route.component} />))
    }
  </div>
);

export default App;
