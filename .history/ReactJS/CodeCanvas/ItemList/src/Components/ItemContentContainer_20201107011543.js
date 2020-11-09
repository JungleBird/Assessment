import React from 'react'

export default function ItemContentContainer(props) {
    return (
        <div>
            {props.item.header}
            {props.item.content.description}
        </div>
    )
}
