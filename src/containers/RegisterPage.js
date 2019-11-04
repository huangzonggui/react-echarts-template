/*
   Heatmap 热力图
   主要通过颜色去表现数值大小，必须配合 visualMap 组件使用
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';
// import 'echarts/lib/component/grid';
// import 'echarts/lib/chart/heatmap';
// import 'echarts/lib/component/visualMap';
import Register from '../components/Register';
// import { getChart } from '../modules/charts/actions';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderer: 'canvas'
        };
    }
    async componentWillMount() {
        // const path = '/heatmap';
        // const key = 'heatmap';

    }
    render() {
        // const renderer = this.state.renderer;
        // const option = this.getOption();

        return <Register />;
    }

}

export default connect(
    state => ({ }),
    dispatch => ({
    })
)(RegisterPage);
