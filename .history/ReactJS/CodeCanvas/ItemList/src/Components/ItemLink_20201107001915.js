import React from 'react'

export default function ItemLink(props) {
    const item_header = props.header
    return (
        <div>
            <h1>{item_header.title}</h1>
            <p>{item_header.subtitle}</p>
        </div>
    )
}
