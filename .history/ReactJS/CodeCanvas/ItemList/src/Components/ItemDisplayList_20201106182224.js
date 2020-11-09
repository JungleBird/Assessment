import React from 'react'
import PropTypes from 'prop-types'



import React, { Component } from 'react'

export class ItemDisplayList extends Component {
    render() {
        return itemsToList.map((item) => (
            <div>
                <h1>{item.title}</h1>
                <p>{item.subtitle}</p>
            </div>
        ))
    }
}

ItemDisplayList.propTypes = {
    items: PropTypes.array
}

export default ItemDisplayList
