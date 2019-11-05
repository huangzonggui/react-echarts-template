import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../components/Login';
import { verifyLoginAction } from '../modules/login/actions';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    async componentWillMount() {
        const path = '/login';
        const key = 'loginStatus';

        await this.props.verifyLogin({ path, key });
    }
    render() {
        return <Login />;
    }

}

export default connect(
    state => ({ loginStatus: state.login }),
    dispatch => ({
        verifyLogin: bindActionCreators(verifyLoginAction, dispatch)
    })
)(LoginPage);