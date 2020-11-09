import React, { Component } from 'react'
import ItemListContainer from './Components/ItemListContainer'
import ItemContentContainer from './Components/ItemContentContainer'
import './DashboardItems.css'
import data from './Data/Items.json'

export class DashboardItems extends Component {

  state = {
    items: [],
    featured: null
  }

  /* CONVER TO PROPER REDUCER */
  loadData = (data) => {
    this.setState({items: data.items})
  }

  componentDidMount() {
    this.loadData(data)
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
        <div className="column" style={{backgroundColor: '#AAA'}}>
          <ItemListContainer 
            items={this.state.items} 
            onItemClick={this.handleClick}
          />
          </div>
          <div className="column" style={{backgroundColor: '#BBB'}}>
          <ItemContentContainer 
            item={this.state.featured}
          />
          </div>
      </div>
    )
  }
}

export default DashboardItems