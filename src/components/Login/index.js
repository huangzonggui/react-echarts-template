import React, {PureComponent} from 'react';
import '../../scss/css/main.css';
import '../../scss/css/util.css';
import {isValidValue} from '../../utils/checkValue';

export default class Register extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loginEmail: '',
            loginPassword: '',
            showEmailTipInput: false,
            showPasswordTipInput: false,
        };
    }

    async componentDidMount() {
        console.log('did mount');
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    requestLogin() {
        // console.log('  :', isValidValue(''));
        // console.log('null:', isValidValue(null));
        // console.log('undefined:', isValidValue(undefined));
        let emailTmp = this.state.loginEmail;
        let pwdTmp = this.state.loginPassword;
        if (!isValidValue(emailTmp)) {
            this.setState({
                showEmailTipInput: true,
                loginEmail: ''
            })
        }

        if (!isValidValue(pwdTmp)) {
            this.setState({
                showPasswordTipInput: true,
                loginPassword: ''
            })
        }

        if (isValidValue(emailTmp) && isValidValue(pwdTmp)) {
            // TODO: request
        }
    }

    onChangeInput(inputType, event) {
        let value = event.target.value;
        // console.log('value:', value)
        // console.log('event:', event)
       if (inputType === 'email') {
           this.setState({
               showEmailTipInput: false,
               loginEmail: value
           })
       }

       if (inputType === 'password') {
           this.setState({
               showPasswordTipInput: false,
               loginPassword: value
           })
       }
    }

    render() {

        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
					<span className="login100-form-title p-b-26">
						Welcome
					</span>
                            <span className="login100-form-title p-b-48">
					</span>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                                <input className="input100" type="text" name="email" onChange={(event) => this.onChangeInput('email', event) }/>
                                <span className="focus-input100" data-placeholder="Email"></span>
                            </div>
                        {this.state.showEmailTipInput ? <div className="tip"><span>please input email</span></div> : null}

                            <div className="wrap-input100 validate-input" data-validate="Enter password">
						<span className="btn-show-pass">
						</span>
                                <input className="input100" type="password" name="pass" onChange={(event) => this.onChangeInput('password', event) }/>
                                <span className="focus-input100" data-placeholder="Password"></span>
                            </div>
                        {this.state.showPasswordTipInput ? <div className="tip"><span>please input password</span></div> : null}

                        <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <button className="login100-form-btn" onClick={() => this.requestLogin()}>
                                        Login
                                    </button>
                                </div>
                            </div>

                            <div className="text-center p-t-115">
						<span className="txt1">
							Don’t have an account?
						</span>

                                <a className="txt2" href="/register">
                                    Sign Up
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        );
    }

}
