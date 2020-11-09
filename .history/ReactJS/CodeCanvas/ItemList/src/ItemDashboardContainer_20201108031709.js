import React, { Component } from 'react';
import {connect} from 'react-redux';
import ItemLink from './Components/itemLink';
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

  componentDidUpdate() {
    console.log(this.props)
  }

  displayItemList() {
    return (
        <div>
            {this.props.items.itemList && this.props.items.itemList.map((item) => (
                <ItemLink key={item.id} header={item.header} onClick={() => this.props.displayItemContent(item)}/>
            ))}
        </div>
    )
  };

  render() {
    return (
      <div className="row">
        <div className="column" style={{backgroundColor: '#AAA'}}>
          {this.displayItemList()}
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
    displayItemContent: (item) => {
      dispatch(displayItemContent(item));
    } 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDashboardContainer)