import React from 'react'

export default function ItemLink(props) {
    const item_header = props.header
    const item_content = props.content

    return (
        <div>
            <button onClick={() => props.onItemClick(item_content)}>
                <h1>{item_header.title}</h1>
                <p>{item_header.subtitle}</p>
            </button>
        </div>
    )
}
//onClick={() => {props.onClick(props.id)}}