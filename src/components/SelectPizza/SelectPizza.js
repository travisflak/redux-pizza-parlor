import { connect } from 'react-redux';
import React, { Component } from 'react';
import axios from 'axios';

class SelectPizza extends Component {


    selectedPizza = () => {
        this.props.dispatch({type: ‘ADD_ELEMENT’, payload: this.state.element})
    }

    render() {
        return (

            <div>
                { props.reduxStore.bookList.map( (pizza, index) => 
          <li key={pizza.id}>{pizza.name} {pizza.description} {pizza.price} {pizza.image_path}</li>  
        )}


                <button onClick={(event) => this.handleSubmit(event)} type='submit'>Submit</button>
                <button onClick={(event) => this.handleSubmit(event)} type='submit'>Submit</button>
                <button onClick={(event) => this.handleSubmit(event)} type='submit'>Submit</button>
                <button onClick={(event) => this.handleSubmit(event)} type='submit'>Submit</button>
                
            </div>
            //need a clickHandler for submit button
            //need a way for text in input to be saved via setting up a state for input
            //clickHandler will fire a action...if action = whatever to trigger a post request
        )
    }
}



const mapStateToProps = (reduxStore) => ({
    reduxStore
  })

export default connect(mapStateToProps)(SelectPizza);