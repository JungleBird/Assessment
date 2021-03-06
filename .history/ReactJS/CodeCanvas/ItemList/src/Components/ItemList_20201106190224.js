import React from 'react'
import PropTypes from 'prop-types'
import ItemLink from './ItemLink'

export default function ItemList(props) {
    return props.items.map((item) => (
        <ItemLink key={item.id} {...item}/>
    ))
}

ItemList.propTypes = {
    items: PropTypes.array
}