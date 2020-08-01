import React from 'react';
import './App.css';
import welcome from './welcome'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import profile from './profile';
import shop from './shop';
import check from './check';
import Images from './images';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Images} />
        <Route path='/registration' component={welcome} />
        <Route path='/shop' component={shop} />
        <Route path='/profile' component={profile} />
        <Route path='/checkout' component={check} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
