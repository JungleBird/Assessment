import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadItemList, displayItemContent} from './actions/itemActions';

import ItemLink from './components/itemLink';
import ItemCard from './components/itemCard';

import preloadedData from './data/items.json'
import {DashboardContainer, Column} from './styles/itemDashboardStyles'

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

  displayItemList() {
    return (
        <div>
             {this.props.itemList.map((item) => (
                <ItemLink 
                  key={item.id} 
                  header={item.header} 
                  onClick={() => this.props.displayItemContent(item)}
                />
            ))}
        </div>
    )
  };

  render() {
    return (
      <DashboardContainer>
        <Column>
          {this.props.itemList && this.displayItemList()}
        </Column>
        <Column>
          <ItemCard item={this.props.displayItem}/>
        </Column>
      </DashboardContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.items
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadItemList: (items) => {
      dispatch(loadItemList(items));
    },
    displayItemContent: (item) => {
      dispatch(displayItemContent(item));
    } 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDashboardContainer)