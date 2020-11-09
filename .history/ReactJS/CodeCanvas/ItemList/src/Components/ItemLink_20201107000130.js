import React from 'react'

export default function ItemLink(props) {
    const item = props.item
    return (
        <div>
            <h1>{props.item.title}</h1>
            <p>{props.item.subtitle}</p>
            
            {console.log(props.item)}
        </div>
    )
}
