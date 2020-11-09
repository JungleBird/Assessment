import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import ItemDashboardApp from './ItemDashboardApp';
import ItemDashboardStore from './ItemDashboardStore';

ReactDOM.render(
  <Provider store={ItemDashboardStore}>
    <ItemDashboardApp/>
  </Provider>, 
  document.getElementById('root')
);

