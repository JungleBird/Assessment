import React from 'react'
import PropTypes from 'prop-types'
import ItemLink from './itemLink'

export const itemListContainer = (props) => {
    return (
        <div>
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