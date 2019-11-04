
import React, {PureComponent} from 'react';

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
        let width = this.state.width;
        let height = this.state.height;

        return (
            <div
                className="register-default bg-primary"
                // ref={el => this.el = el}
                style={{width, height}}
            >register
                <div style={{width: '100px', backgroundColor: '#000'}}>
                    test
                </div>
            </div>
        );
    }

}
