import React, { Component } from 'react'
import ItemListContainer from './Components/ItemListContainer'
import ItemContentContainer from './Components/ItemContentContainer'
import './DashboardItems.css'
import data from './Data/Items.json'


export class DashboardItems extends Component {

  state = {
    items: data.items,
    featured: null
  }

  /*REFACTOR TO USE REDUCERS*/
  handleClick = itemId => {
    const index = this.state.items.findIndex(function(item, i) {
      return item.id === itemId
    });
    const item = this.state.items[index]
    this.setState({featured: item});
  };

  render() {
    return (
      <div className="row">
          <ItemListContainer 
            items={this.state.items} 
            onItemClick={this.handleClick}
          />
          <ItemContentContainer 
            item={this.state.featured}
          />
      </div>
    )
  }
}

export default DashboardItems