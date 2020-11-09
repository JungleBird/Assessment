import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import ItemDashboardContainer from './ItemDashboardContainer';
import ItemDashboardStore from './ItemDashboardStore';

ReactDOM.render(
  <Provider store={ItemDashboardStore}>
    <ItemDashboardContainer/>
  </Provider>, 
  document.getElementById('root')
);

