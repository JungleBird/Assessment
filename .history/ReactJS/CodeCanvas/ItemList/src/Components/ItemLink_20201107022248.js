import React from 'react'

export default function ItemLink(props) {

    return (
        <div>
            <button onClick={() => props.onItemClick(props.id)}>
                <h1>{props.header && (props.header.title || 'No title')}</h1>
                <p>{props.header && (props.header.subtitle || 'No subtitle')}</p>
            </button>
        </div>
    )
}