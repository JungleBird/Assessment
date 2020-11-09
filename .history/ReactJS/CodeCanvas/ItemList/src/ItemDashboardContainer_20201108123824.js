import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadItemList, viewItemContent} from './actions/itemActions';

import ItemHeader from './components/itemHeader';
import ItemCard from './components/itemCard';

import preloadedData from './data/items.json'
import {AppContainer, Column, HeaderList} from './styles/itemDashboardStyles'

class ItemDashboardContainer extends Component {

  fetchItems = () => {
    return preloadedData.items;
  };

  componentDidMount() {
    let items = [];
    items = this.fetchItems();
    this.props.loadItemList(items);
  };

  displayItemList = (storeItems) => {
    return (
        <HeaderList>
             {storeItems.itemList && storeItems.itemList.map((item) => (
                  <ItemHeader 
                    key={item.id}
                    {...item.header}
                    canClick={true}
                    onClick={() => this.props.viewItemContent(item)}
                  />
            ))}
        </HeaderList>
    )
  };

  displayItemCard = (storeItems) => {
    return (
      <div>
        {storeItems.viewItem && <ItemCard {...storeItems.viewItem}/>}
      </div>
    );
  }

  render() {
    return (
      <AppContainer>
        <Column>
          {this.displayItemList(this.props.items)}
        </Column>
        <Column>
          {this.displayItemCard(this.props.items)}
        </Column>
      </AppContainer>
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