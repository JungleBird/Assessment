import React from 'react'
import PropTypes from 'prop-types'

export default function ItemDisplayList(props) {
    const itemsToList = props.items
    return (
        <div>
            {itemsToList.length > 0 && itemsToList.map((item) => (
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.subtitle}</p>
                </div>
            ))}
        </div>
    )
}

ItemDisplayList.propTypes = {
    items: PropTypes.array
}