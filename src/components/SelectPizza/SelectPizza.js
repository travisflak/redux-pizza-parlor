import { connect } from 'react-redux';
import React, { Component } from 'react';
import axios from 'axios';

class SelectPizza extends Component {
    // state {
    //     //might need a local state 
    // }

    // selectedPizza = () => {
    //     this.props.dispatch({type: ‘ADD_ELEMENT’, payload: this.state.element})
    // }

    render() {
        return (
            // change screaming pizza list
            <>
                <div> 
                    { this.props.reduxStore.PIZZALIST.map( (pizza, index) => 
                        <div key={pizza.id} onClick={(event) => this.selectedPizza(event)}>
                            <img src={pizza.image_path}/>
                            {pizza.name} {pizza.description} {pizza.price}
                            <button onClick={(event) => this.toggledRomoveAdd(event)}>

                            </button> 
                            {/* ternary operator */}
                        </div>
                    )}     
                </div>
                <button onClick={(event) => this.goToNextPage(event)}>
                    {/* //write out browser change for next button, so write out a new function for goTo NextPage, above selectedPizza */}
                    Next
                </button>
            </>
        )}
}



const mapStateToProps = (reduxStore) => ({
    reduxStore
  })

export default connect(mapStateToProps)(SelectPizza);