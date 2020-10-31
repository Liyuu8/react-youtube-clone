import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Top from './pages/Top';
import Search from './pages/Search';
import Watch from './pages/Watch';

const App = () => (
  // https://qiita.com/ry-itto/items/d11ae12dbe9cd32d83f8
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Top}></Route>
      <Route exact path="/search" component={Search}></Route>
      <Route exact path="/watch" component={Watch}></Route>
    </Switch>
  </Router>
);

export default App;
