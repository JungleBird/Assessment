import React from 'react';
import PropTypes from 'prop-types';
import ItemLink from './itemLink';

export const ItemListContainer = (props) => {
    return (
        <div>
            {console.log(props)}
            {props.itemList && props.itemList.map((item) => (
                <ItemLink key={item.id} header={item.header} onClick={() => props.displayItem(item.id)}/>
            ))}
        </div>
    )
}

ItemListContainer.propTypes = {
    itemsList: PropTypes.array,
    displayItem: PropTypes.func
}