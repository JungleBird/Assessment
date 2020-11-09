import React from 'react'
import PropTypes from 'prop-types'

export default function ItemDisplayList(props) {
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

ItemDisplayList.propTypes = {
    items: PropTypes.array
}