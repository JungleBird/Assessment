import './DashboardItems.css'
import ItemListContainer from './Components/ItemListContainer'
import ItemContentContainer from './Components/ItemContentContainer'
import data from './Data/Items.json'

import React, { Component } from 'react'

export class DashboardItems extends Component {

  state = {
    items: data.items,
    featured_item: null
  }

  /*REFACTOR TO USE REDUCERS*/
  handleClick = item => {
    this.setState({featured_item: item});
  };

  render() {
    return (
      <div className="row">
        <div className="column" style={{backgroundColor: '#AAA'}}>
          <ItemListContainer items={this.state.items} onItemClick={this.handleClick}/>
        </div>
        <div className="column" style={{backgroundColor: '#BBB'}}>
          <h2>Column 2</h2>
          <p>Some text..</p>
        </div>
      </div>
    )
  }
}

export default DashboardItems