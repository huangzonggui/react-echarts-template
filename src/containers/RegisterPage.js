import React, { Component } from 'react';
import { connect } from 'react-redux';
import Register from '../components/Register';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderer: 'canvas'
        };
    }
    async componentWillMount() {
    }
    render() {
        return <Register />;
    }

}

export default connect(
    state => ({ }),
    dispatch => ({
    })
)(RegisterPage);
