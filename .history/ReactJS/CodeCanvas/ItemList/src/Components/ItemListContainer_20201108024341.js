import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ItemLink from './itemLink';
import {displayItemContent} from '../actions/itemActions';

const ItemListContainer = (props) => {
    return (
        <div>
            {props.itemList && props.itemList.map((item) => (
                <ItemLink key={item.id} header={item.header} onClick={() => props.displayItemContent(item.id)}/>
            ))}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      displayItemContent: (itemId) => {
        dispatch(displayItemContent(itemId));
      } 
    };
  };

export default connect({}, mapDispatchToProps)(ItemListContainer)