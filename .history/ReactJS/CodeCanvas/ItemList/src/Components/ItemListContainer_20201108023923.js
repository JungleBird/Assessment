import React from 'react';
import PropTypes from 'prop-types';
import ItemLink from './itemLink';

const ItemListContainer = (props) => {
    return (
        <div>
            {console.log(props)}
            {props.itemList && props.itemList.map((item) => (
                <ItemLink key={item.id} header={item.header}/>
            ))}
        </div>
    )
}

ItemListContainer.propTypes = {
    itemsList: PropTypes.array,
    displayItem: PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
    return {
      displayItemContent: (itemId) => {
        dispatch(displayItemContent(itemId));
      } 
    };
  };

export default connect({}, mapDispatchToProps)(ItemListContainer)