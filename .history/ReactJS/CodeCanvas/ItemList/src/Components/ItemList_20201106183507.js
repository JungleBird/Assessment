import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ItemList extends Component {
    
    render() {
        return this.props.items.map((item) => (
            <div>
                <h1>{item.title}</h1>
                <p>{item.subtitle}</p>
            </div>
        ),console.log(this.props))
    }
}

ItemList.propTypes = {
    items: PropTypes.array
}

export default ItemList
