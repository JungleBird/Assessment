import React from 'react'

export default function ItemLink(props) {
    return (
        <div key={props.item.id}>
            <h1>{props.item.title}</h1>
            <p>{props.item.subtitle}</p>
            
            {console.log(props.item)}
        </div>
    )
}
