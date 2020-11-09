import React from 'react'

export default function ItemLink(props) {
    const header = props.header
    return (
        <div>
            <h1>{header.title}</h1>
            <p>{header.subtitle}</p>
        </div>
    )
}
