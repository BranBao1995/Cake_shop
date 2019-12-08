import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import classes from './App.css';
import Welcome from './containers/Welcome/Welcome';
import CakeDisplay from './containers/CakeDisplay/CakeDisplay';
import CustomCake from './containers/CustomCake/CustomCake';
import Order from './containers/Order/Order';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>

          <Route path="/" exact component={Welcome} />
          <Route path="/Browse" component={CakeDisplay} />
          <Route path="/Customize" component={CustomCake} />
          <Route path="/Order" component={Order} />

        </Switch>

      </div>
    );
  }
}

export default App;
