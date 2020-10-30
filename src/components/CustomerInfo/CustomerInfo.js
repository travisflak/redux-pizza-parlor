import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerInfo extends Component {
    state = {
        customerInfoAdd:{
            name: '',
            address: '',
            city: '',
            zip:0,
            type: '',
            time: ''
        }
    }
    handleNameChange = (event) => {
        this.setState({
            customerInfoAdd: {
                ...this.state.customerInfoAdd,
                name: event.target.value
            }
        })
    }

    handleAddressChange =(event) => {
        this.seState({
            customerInfoAdd: {
                ...this.state.customerInfoAdd,
                address: event.target.value
            }
        })
    }
    handleCityChange=(event) => {
        this.setState({
            customerInfoAdd: {
                ...this.state.customerInfoAdd,
                city: event.target.value
            }
        })
    }
    handleZipChange=(event) => {
        this.setState({
            customerInfoAdd: {
                ...this.state.customerInfoAdd,
                zip: event.target.value
            }
        })
    }
    handleTypeChange=(event) => {
        this.setState({
            customerInfoAdd: {
                ...this.state.customerInfoAdd,
                zip: event.target.value
            }
        })
    }
    handleTypeChange=(event) => {
        this.setState({
            customerInfoAdd: {
                ...this.state.customerInfoAdd,
                time: currentTime
            }
        })
    }
  
    addInformation = (event) => {
        event.preventDefault();
    
        this.props.dispatch({type: 'ADD_ORDER', payload: this.state.informationToAdd})
        this.props.history.push('/checkout')
    }
    render() {
        return (

            <>
            <form onSubmit={this.addInformation}>
                <input onChange={this.handleNameChange} type ="text" placeholder="Name"/>
                <input onChange={this.handleAddressChange} type="text" placeholder="Address"/>
                <input onChange={this.handleCityChange} type="text" placeholder="City"/>
                <input onChange={this.handleZipChange} type="text" placeholder="Zip"/>
                <select id="typeIn" onChange={this.handleTypeChange}>
                    <option value='Delivery'>Delivery</option>
                    <option value='Pickup'>Pickup</option>
                </select>
                <input type="submit" value="Submit"/>
            </form>
            </>
         
        )
    }
}
const mapStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }
export default connect(mapStateToProps)(CustomerInfo);