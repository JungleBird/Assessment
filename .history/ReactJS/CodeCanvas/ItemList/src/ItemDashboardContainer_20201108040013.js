import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadItemList, displayItemContent} from './actions/itemActions';

import ItemLink from './Components/itemLink';
import ItemContentContainer from './Components/itemContentContainer';

import preloadedData from './Data/items.json'
import './styles/itemDashboardStyles'

class ItemDashboardContainer extends Component {

  fetchItems() {
    return preloadedData.items || [];
  };

  componentDidMount() {
    const items = this.fetchItems();
    this.props.loadItemList(items);
  };

  componentDidUpdate() {
    console.log(this.props)
  }

  displayItemList() {
    return (
        <div>
             {this.props.itemList.map((item) => (
                <ItemLink key={item.id} header={item.header} onClick={() => this.props.displayItemContent(item)}/>
            ))}
        </div>
    )
  };

  render() {
    return (
      <ItemDashboardTable>
        <div className="column" style={{backgroundColor: '#AAA'}}>
          {this.props.itemList && this.displayItemList()}
        </div>
        <div className="column" style={{backgroundColor: '#BBB'}}>
          <ItemContentContainer 
            item={this.props.displayItem}
          />
        </div>
      </ItemDashboardTable>
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