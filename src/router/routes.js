/*
   Root, Router 配置
*/
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';
/*
* 暂时没用 按需加载
* */
// import lazyLoad from './lazyLoad';
import App from '../containers/App';
import RegisterPage from '../containers/RegisterPage';
import LoginPage from '../containers/LoginPage';

import HeatmapChart from '../containers/HeatmapChart';
import MapChart from '../containers/MapChart';
import ParallelChart from '../containers/ParallelChart';
import GraphChart from '../containers/GraphChart';

const Root = () => (
   <div>
      <Switch>
         <Route
            path="/"
            render={props => (
               <App>
                  <Switch>
                     <Route path="/" exact component={LoginPage} />
                     <Route path="/register" exact component={RegisterPage} />
                      <Route path="/login" exact component={LoginPage} />

                     <Route path="/heatmap" component={HeatmapChart} />
                     <Route path="/map" component={MapChart} />
                     <Route path="/parallel" component={ParallelChart} />
                     <Route path="/graph" component={GraphChart} />
                     <Route render={() => <Redirect to="/login" />} />
                  </Switch>
               </App>
            )}
         />
         <Route render={() => <Redirect to="/" />} />
      </Switch>
   </div>
);

export default hot(module)(Root);
