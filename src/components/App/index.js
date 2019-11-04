/*
   App 容器组件的子组件，顶部状态栏
*/
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import SideBar from './SideBar';
import './app.scss';

class AppCom extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }
   static defaultProps = {
      routePaths: []
   };
   render() {
      // const { routePaths } = this.props;

      return (
         <div id="app-container">
            <header className="header">汽車買賣</header>
            <div className="main">
               <div className="main-charts-content">
                  <div className="charts">{this.props.children}</div>
               </div>
            </div>
         </div>
      );
   }
}

export default withRouter(AppCom);
