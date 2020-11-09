import React from 'react'

export default function ItemLink(props) {

    const invalid = {
        title: 'No Title',
        subtitle: 'No subtitle'
    }

    return (
        <div>
            <button onClick={() => props.onItemClick(props.id)}>
                <h1>{props.header && (props.header.title || invalid.title)}</h1>
                <p>{props.header && (props.header.subtitle || invalid.subtitle)}</p>
            </button>
        </div>
    )
}