import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ItemDisplayList extends Component {

    render() {
        return this.props.data.items.map((item) => (
            <div>
                <h1>{item.title}</h1>
                <p>{item.subtitle}</p>
            </div>
        ));
    }
}

ItemDisplayList.propTypes = {
    items: PropTypes.array
}

export default ItemDisplayList
