import React from 'react'
import PropTypes from 'prop-types'
import ItemLink from './itemLink'

export default function ItemListContainer(props) {
    return (
        <div>
            {props.itemList && props.itemList.map((item) => (
                <ItemLink key={item.id} id={item.id} header={item.header}/>
            ))}
        </div>
    )
}

ItemListContainer.propTypes = {
    itemsList: PropTypes.array
}