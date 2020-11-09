import React, { Component } from 'react'
import PropTypes from 'prop-types'
import itemLink from './ItemLink'

export class ItemList extends Component {
    
    render() {
        return this.props.items.map((item) => (
            <itemLink key={item.id} props={item}/>
        ),console.log(this.props))
    }
}

ItemList.propTypes = {
    items: PropTypes.array
}

export default ItemList
