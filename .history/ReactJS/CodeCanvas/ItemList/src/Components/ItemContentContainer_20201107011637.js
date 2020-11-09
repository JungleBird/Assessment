import React from 'react'

export default function ItemContentContainer(props) {
    return (
        <div>
            <div>
                {props.item.header.title}
                {props.item.header.subtitle}
            </div>
            <div>
                {props.item.content.description}
            </div>
        </div>
    )
}
