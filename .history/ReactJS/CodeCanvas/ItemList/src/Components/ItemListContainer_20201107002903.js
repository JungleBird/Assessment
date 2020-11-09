import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ItemLink from './ItemLink'

export class ItemListContainer extends Component {
    
    render() {
        return this.props.items.map((item) => (
            <ItemLink key={item.id} header={item.header} onClick={this.props.onClick(item)}/>
        ))
    }
}

export default ItemListContainer

ItemListContainer.propTypes = {
    items: PropTypes.array
}