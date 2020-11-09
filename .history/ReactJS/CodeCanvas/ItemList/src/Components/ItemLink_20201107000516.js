import React from 'react'

export default function ItemLink(props) {
    const item = props.item
    return (
        <div>
            <h1>{item.title}</h1>
            <p>{item.subtitle}</p>
        </div>
    )
}
