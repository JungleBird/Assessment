import React, { Component } from 'react';
import {connect} from 'react-redux';
import ItemListContainer from './Components/ItemListContainer';
import ItemContentContainer from './Components/ItemContentContainer';
import {loadItemList} from './actions/itemActions';
import preloadedItems from './Data/items.json'
import './ItemDashboard.css'

class ItemDashboardContainer extends Component {
  constructor() {
    super();
  }

  fetchItems() {
    return preloadedItems || [];
  };

  componentDidMount() {
    const items = this.fetchItems();
    this.props.loadItemList(items);
  };

  /*REFACTOR TO USE REDUCERS
  handleClick = itemId => {
    const index = this.state.items.findIndex(function(item, i) {
      return item.id === itemId
    });
    const item = this.state.items[index]
    this.setState({featured: item});
  };
  */

  render() {
    return (
      <div className="row">
        <div className="column" style={{backgroundColor: '#AAA'}}>
          <ItemListContainer 
            items={this.props.items.itemList}
          />
          </div>
          <div className="column" style={{backgroundColor: '#BBB'}}>
          <ItemContentContainer 
            item={this.props.items.activeItem}
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