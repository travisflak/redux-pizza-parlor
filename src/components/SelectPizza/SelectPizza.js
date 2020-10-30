import { connect } from 'react-redux';
import React, { Component } from 'react';
import axios from 'axios';

class SelectPizza extends Component {

    // const removeAdd= (state = [], action) => {
    //     //which pizza am I looking at and have I already set that pizza
    //     if (addPizza === true) {
    //         return;
    //     } 
    //     else if(removePizza === true){
    //     }
    //     return;
    // }

    // selectedPizza = () => {
    //     this.props.dispatch({type: ‘ADD_ELEMENT’, payload: this.state.element})
    // }

    render() {
        return (
            // change screaming pizza list
            <>
                <div> 
                    { this.props.reduxStore.pizzaReducer.map( (pizza, index) => 
                        <div key={pizza.id} onClick={(event) => this.selectPizza(event)}>
                            <img src={pizza.image_path}/>
                            {pizza.name} {pizza.description} {pizza.price}
                            <button onClick={(event) => this.removeAdd(event)}>
                               
                            </button> 
                            {/* ternary operator */}
                        </div>
                    )}     
                </div>
            </>
        )}
}



const mapStateToProps = (reduxStore) => ({
    reduxStore
  })

export default connect(mapStateToProps)(SelectPizza);