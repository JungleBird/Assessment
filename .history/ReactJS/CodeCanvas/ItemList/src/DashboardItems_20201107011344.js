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
  handleClick = itemId => {
    const index = this.state.items.findIndex(function(item, i) {
      return item.id === itemId
    });
    const item = this.state.items[index]
    console.log(item)
    this.setState({featured_item: item});
  };

  render() {
    return (
      <div className="row">
        <div className="column" style={{backgroundColor: '#AAA'}}>
          <ItemListContainer items={this.state.items} onItemClick={this.handleClick}/>
        </div>
        <div className="column" style={{backgroundColor: '#BBB'}}>
          {this.state.featured_item && 
            <ItemContentContainer item={this.state.featured_item}/>
          }
        </div>
      </div>
    )
  }
}

export default DashboardItems