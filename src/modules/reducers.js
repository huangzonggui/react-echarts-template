// 引入reducer
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import charts from './charts/reducer';
import login from './login/reducer';

// 合并到主reducer
const reducers = {
   charts,
    login,
   routing: routerReducer
};

// combineReducers() 函数用于将分离的 reducer 合并为一个 reducer
export default combineReducers(reducers);
