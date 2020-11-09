import React from 'react'
import PropTypes from 'prop-types'

export default function ItemDisplayList(props) {
    const itemsToList = props.items
    return (
        <div>
            {itemsToList.length > 0 && itemsToList.map((listItem) => (
            <div>
                <h1>{listItem.title}</h1>
                <p>{listItem.subtitle}</p>
            </div>
            ))}
        </div>
    )
}

ItemDisplayList.propTypes = {
    items: PropTypes.array
}