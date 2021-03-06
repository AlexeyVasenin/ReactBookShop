import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import './app.css';

import App from './containers/App';

import creatStore from './store';

const store = creatStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

