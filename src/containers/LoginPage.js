import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderer: 'canvas'
        };
    }
    async componentWillMount() {
    }
    render() {
        return <Login />;
    }

}

export default connect(
    state => ({ }),
    dispatch => ({
    })
)(LoginPage);