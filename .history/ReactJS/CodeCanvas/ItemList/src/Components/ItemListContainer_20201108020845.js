import React from 'react'
import PropTypes from 'prop-types'
import ItemLink from './itemLink'

export default function ItemListContainer(props) {
    return (
        <div>
            {props.itemList && props.itemList.map((item) => (
                <ItemLink key={item.id} header={item.header} onClick={console.log(props)}/>
            ))}
        </div>
    )
}

ItemListContainer.propTypes = {
    itemsList: PropTypes.array,
    displayItem: PropTypes.func
}