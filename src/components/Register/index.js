import React, {PureComponent} from 'react';
// import '../../scss/css/main.css';
// import '../../scss/css/util.css';

export default class Register extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            width: '100%',
            height: '100%',
        };
    }
    async componentDidMount() {
        console.log('did mount');
    }
    componentDidUpdate() {
    }
    componentWillUnmount() {
    }
    render() {

        return (
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <form className="login100-form validate-form">
					<span className="login100-form-title p-b-26">
						註冊
					</span>
                                <span className="login100-form-title p-b-48">
					</span>

                                <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                                    <input className="input100" type="text" name="email" />
                                        <span className="focus-input100" data-placeholder="Email"></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Enter password">
						<span className="btn-show-pass">
						</span>
                                    <input className="input100" type="password" name="pass" />
                                        <span className="focus-input100" data-placeholder="Password"></span>
                                </div>

                                <div className="container-login100-form-btn">
                                    <div className="wrap-login100-form-btn">
                                        <div className="login100-form-bgbtn"></div>
                                        <button className="login100-form-btn">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
        );
    }

}
