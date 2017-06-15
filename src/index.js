import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory'
import {configureStore} from './redux/store';
import App from './containers';

const history = createBrowserHistory();
const store = configureStore(history, {});

ReactDOM.render(
  <Provider store={store} key="provider">
    <App/>
  </Provider>,
  document.getElementById('root')
);
