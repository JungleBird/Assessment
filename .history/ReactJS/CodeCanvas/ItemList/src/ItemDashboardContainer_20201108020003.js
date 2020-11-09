import React, { Component } from 'react';
import {connect} from 'react-redux';
import ItemListContainer from './Components/itemListContainer';
import ItemContentContainer from './Components/itemContentContainer';
import {loadItemList, displayItemContent} from './actions/itemActions';
import preloadedData from './Data/items.json'
import './ItemDashboard.css'

class ItemDashboardContainer extends Component {

  fetchItems() {
    return preloadedData.items || [];
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
            itemList={this.props.items.itemList}
            displayItem={() => this.props.items.displayItemContent}
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
    },
    displayItemContent: (itemId) => {
      dispatch(displayItemContent(itemId));
    } 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDashboardContainer)