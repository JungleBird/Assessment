import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ItemLink from './ItemLink'

export class ItemList extends Component {
    
    render() {
        return this.props.items.map((item) => (
            <ItemLink key={item.id} {...item}/>
        ))
    }
}

export default ItemList

ItemList.propTypes = {
    items: PropTypes.array
}