import React from 'react'

export default function ItemLink(props) {
    //const item = props.item
    const {id, title, subtitle} = {...props}
    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}
