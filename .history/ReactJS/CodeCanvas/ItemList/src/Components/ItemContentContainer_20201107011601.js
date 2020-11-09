import React from 'react'

export default function ItemContentContainer(props) {
    return (
        <div>
            {props.item.header.title}
            {props.item.header.subtitle}
            {props.item.content.description}
        </div>
    )
}
