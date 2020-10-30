import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminPage extends Component {
    render() {
        return (
            <p>ADMIN PAGE</p>
        )
    }
}

export default connect()(AdminPage);