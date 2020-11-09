import React from 'react'
import PropTypes from 'prop-types'

export default function ItemListDisplay(props) {
    const itemsToDisplay = props.items
    return (
        <div>
            {itemsToDisplay.length > 0 && itemsToDisplay.map(item => (
                <div>
                    item.title
                </div>

            ))}
        </div>
    )
}

ItemListDisplay.propTypes = {
    items: PropTypes.array
}