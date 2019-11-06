import React, { Component } from 'react';
import { connect } from 'react-redux';

import CarList from '../components/CarList';

class CarListPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <CarList />
    }
}

export default connect(
    state => ({}),
    dispatch => ({})
)(CarListPage)
