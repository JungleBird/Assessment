import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ItemLink from './ItemLink'

export class ItemListContainer extends Component {
    render() {
        {console.log(this)}
        return this.props.items.map((item) => (
            <ItemLink key={item.id} id={item.id} header={item.header} onItemClick={() => this.onItemClick}/>
        ))
        
    }
}

export default ItemListContainer

ItemListContainer.propTypes = {
    items: PropTypes.array,
    onClick: PropTypes.func
}