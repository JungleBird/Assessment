import React, { Component } from 'react';
import {connect} from 'react-redux';
import ItemListContainer from './Components/ItemListContainer';
import ItemContentContainer from './Components/ItemContentContainer';

import {loadItemList} from './actions/itemActions';

import './ItemDashboard.css'
import itemData from './Data/Items.json'

class ItemDashboardContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadItemList(itemData)
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadItemList: (items) => {
      dispatch(loadItemList(items));
    } 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDashboardContainer)