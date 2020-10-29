import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';

import SelectPizza from '../SelectPizza/SelectPizza';

class App extends Component {


  componentDidMount() { // react Component method
    this.getPizzas();
  }
  getPizzas = () => {
    // just like $.ajax()
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then((response) => {
      console.log(response);
      this.props.dispatch({ type: 'SET_PIZZAS', payload: response.data})
      // response.data will be the array of artists
      this.setState({
        pizzas: response.data,
      });
    });
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

const mapStateToProps = (reduxState) => {
  return{
    reduxState
  }
}
export default connect(mapStateToProps)(App);


