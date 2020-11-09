import React from 'react'

export default function ItemLink(props) {
    const item_header = props.header
    return (
        <div>
            {console.log(props)}
            <button>
                <h1>{item_header.title}</h1>
                <p>{item_header.subtitle}</p>
            </button>
        </div>
    )
}
