import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';

import SelectPizza from '../SelectPizza/SelectPizza';

class App extends Component {

  componentDidMount = () => {
    this.getPizza();
  }

  getPizza = () => {
    axios.get('/api/pizza').then((response) => {
      console.log(response.data);
    }).catch((error) => {
      alert(error);
    })
  }

  render() {
    return (
      // <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
        {/* <SelectPizza/> */}
        {/* <Link to="/api/pizza">Next</Link> */}
        {/* <Route path="/customer" component={CustomerInfo}/> */}
      </div>
      // </Router>
    );
  }
}

export default connect()(App);
