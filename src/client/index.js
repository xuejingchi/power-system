import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from 'reducers';
import { createStore } from 'redux';
import routes from '../common/routes';
import './index.less';

// 第二步：根据计算规则生成 store
const store = createStore(rootReducer)
// 主DOM组件
ReactDOM.render(
  //  第三步：定义数据（即state）变化之后的派发规则，由provider封装好的
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('root')
);