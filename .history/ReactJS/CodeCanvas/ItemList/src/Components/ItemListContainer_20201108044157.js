/* REMOVE THIS IF WE'RE NOT USING IT */

import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ItemHeader from './itemHeader';
import {displayItemContent} from '../actions/itemActions';

const ItemListContainer = (props) => {
    return (
        <div>
            {props.itemList && props.itemList.map((item) => (
                <ItemLink key={item.id} header={item.header} onClick={() => props.displayItemContent(item)}/>
            ))}
        </div>
    )
}

ItemListContainer.propTypes = {
    itemsList: PropTypes.array,
    displayItem: PropTypes.func
}

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