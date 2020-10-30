import { connect } from 'react-redux';
import React, { Component } from 'react';
import axios from 'axios';

class SelectPizza extends Component {


    selectedPizza = () => {
        this.props.dispatch({type: ‘ADD_ELEMENT’, payload: this.state.element})
    }

    render() {
        return (
            // change screaming pizza list
            <div> 
                { props.reduxStore.PIZZALIST.map( (pizza, index) => 
          <div key={pizza.id} onClick={(event) => this.selectedPizza(event)}>
              {pizza.name} {pizza.description} {pizza.price} {pizza.image_path}
            </div>
        //   <div  type='submit'>Submit</div>  //saving this for a button
        )}
                
            </div>
        )
    }
}



const mapStateToProps = (reduxStore) => ({
    reduxStore
  })

export default connect(mapStateToProps)(SelectPizza);