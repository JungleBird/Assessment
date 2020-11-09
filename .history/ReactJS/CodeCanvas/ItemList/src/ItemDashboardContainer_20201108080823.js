import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadItemList, viewItemContent} from './actions/itemActions';

import ItemHeader from './components/itemHeader';
import ItemCard from './components/itemCard';

import preloadedData from './data/items.json'
import {BoxContainer, Column} from './styles/itemDashboardStyles'

class ItemDashboardContainer extends Component {

  fetchItems() {
    return preloadedData.items || [];
  };

  componentDidMount() {
    const items = this.fetchItems();
    this.props.loadItemList(items);
  };

  /*
  componentDidUpdate() {
    console.log(this.props)
  }
  */

  displayItemList = (storeItems) => {
    return (
        <div>
             {storeItems.itemList && storeItems.itemList.map((item) => (
                <div key={item.id} onClick={() => this.props.viewItemContent(item)}>
                  <ItemHeader header={item.header}/>
                </div>
            ))}
        </div>
    )
  };

  render() {
    return (
      <BoxContainer>
        <Column>
          {displayItemList(this.props.items)}
        </Column>
        <Column>
          <ItemCard item={this.props.items.viewItem}/>
        </Column>
      </BoxContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadItemList: (items) => {
      dispatch(loadItemList(items));
    },
    viewItemContent: (item) => {
      dispatch(viewItemContent(item));
    } 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDashboardContainer)