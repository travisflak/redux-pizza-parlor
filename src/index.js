import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'; 


const pizzaReducer = (state = [], action) => {

    if(action.type === 'SET_PIZZA') {
        return action.payload;
    } 
    else if(action.type === 'SET_PIZZA'){
        return [...state, action.payload]
    }
    return state;
}
const customerInfoReducer = (state = [], action) => {
    if (action.type === 'ADD_ORDER'){
        return [...state, action.payload]
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        customerInfoReducer
    }),
    
);
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));


