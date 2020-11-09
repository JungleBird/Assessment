import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ItemLink from './ItemLink'

export class ItemListContainer extends Component {
    render() {
        return this.props.items.map((item) => (
            <ItemLink key={item.id} id={item.id} header={item.header} onItemClick={() => this.props.onItemClick}/>
        ))
        
    }
}

export default ItemListContainer

ItemListContainer.propTypes = {
    items: PropTypes.array,
    onClick: PropTypes.func
}