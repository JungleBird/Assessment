import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadItemList, viewItemContent} from './actions/itemActions';

import ItemHeader from './components/itemHeader';
import ItemCard from './components/itemCard';

import preloadedData from './data/items.json'
import {AppContainer, Column, HeaderList, HeaderBox} from './styles/itemDashboardStyles'

class ItemDashboardContainer extends Component {

  fetchItems = () => {
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
        <HeaderList>
             {storeItems.itemList && storeItems.itemList.map((item) => (
                <HeaderBox key={item.id} onClick={() => this.props.viewItemContent(item)}>
                  <ItemHeader {...item.header}/>
                </HeaderBox>
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