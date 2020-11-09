import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ItemLink from './itemLink';
import {displayItemContent} from '../actions/itemActions';

export const ItemListContainer = (props) => {
    return (
        <div>
            {props.itemList && props.itemList.map((item) => (
                <ItemLink key={item.id} header={item.header} onClick={() => props.displayItem(item)}/>
            ))}
        </div>
    )
}

ItemListContainer.propTypes = {
    itemsList: PropTypes.array,
    displayItem: PropTypes.func
}

/*
const mapStateToProps = (state) => {
    return {
      items: state.items
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
      displayItemContent: (item) => {
        dispatch(displayItemContent(item));
      } 
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(ItemListContainer)
*/