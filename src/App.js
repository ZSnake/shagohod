import * as React from 'react';
import { Route } from 'react-router';
import MapMovies from './containers/MapMovies';
import Sidebar from './components/Sidebar';
import './App.css';

const routes = [{
  path: '/',
  component: MapMovies,
}];

const App = () => (
  <div className="app">
    <Sidebar />
    <div className="content">
      {routes.map(route => (
        <Route exact key={route.path} path={route.path} component={route.component} />))
      }
    </div>
  </div>
);

export default App;
