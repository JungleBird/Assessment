import React from 'react'

export default function ItemContentContainer(props) {
    return (
        <div>
            {props.item.content.description}
        </div>
    )
}
