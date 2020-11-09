import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadItemList, viewItemContent} from './actions/itemActions';

import ItemHeader from './components/itemHeader';
import ItemCard from './components/itemCard';

import preloadedData from './data/items.json'
import {AppContainer, Grid, Column, HeaderListWrapper} from './styles/itemDashboardStyles'

class ItemDashboardApp extends Component {

  fetchPreloadedData = () => {
    return preloadedData || {items:[]};
  };

  displayItemList = (storeItems) => {
    return (
        <HeaderListWrapper>
             {storeItems.itemList && storeItems.itemList.map((item) => (
                  <ItemHeader 
                    key={item.id}
                    {...item.header}
                    title={item.name}
                    canClick={true}
                    onClick={() => this.props.viewItemContent(item)}
                  />
            ))}
        </HeaderListWrapper>
    )
  };

  displayItemCard = (storeItems) => {
    return (
      <div>
        {storeItems.viewItem && <ItemCard {...storeItems.viewItem}/>}
      </div>
    );
  }

  componentDidMount() {
    let items = [];
    const data = this.fetchPreloadedData();
    items = data.items;
    this.props.loadItemList(items);
  };

  render() {
    return (
      <AppContainer>
        <Grid>
          <Column size={1}>
            {this.displayItemList(this.props.itemStore)}
          </Column>
          <Column size={2}>
            {this.displayItemCard(this.props.itemStore)}
          </Column>
        </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemDashboardApp)