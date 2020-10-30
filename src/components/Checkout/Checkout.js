import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {
    render() {
        return (
            <p>CHECKOUT</p>
        )
    }
}

export default connect()(Checkout);