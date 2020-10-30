import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerInfo extends Component {
    render() {
        return (
            <p>test</p>
        )
    }
}

export default connect()(CustomerInfo);