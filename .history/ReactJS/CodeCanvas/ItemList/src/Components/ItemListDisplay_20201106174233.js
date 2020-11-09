import React from 'react'
import PropTypes from 'prop-types'

export default function ItemListDisplay(props) {
    const itemsToList = props.items
    return (
        <div>
            {itemsToDisplay.length > 0 && itemsToList.map((listItem) => (
                <div>
                    listItem.title
                </div>

            ))}
        </div>
    )
}

ItemListDisplay.propTypes = {
    items: PropTypes.array
}