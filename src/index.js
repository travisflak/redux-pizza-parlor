import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'; 

const reduxStore = createStore(
    combineReducers({

    })
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
