import React from 'react'

export default function ItemLink(props) {

    const invalid_title = 'No Title'
    const invalid_subtitle = 'No Subtitle'
    
    return (
        <div>
            <button onClick={() => props.onItemClick(props.id)}>
                <h1>{props.header && (props.header.title || invalid_title)}</h1>
                <p>{props.header && (props.header.subtitle || invalid_subtitle)}</p>
            </button>
        </div>
    )
}