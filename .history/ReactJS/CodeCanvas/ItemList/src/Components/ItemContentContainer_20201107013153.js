import React from 'react'

export default function ItemContentContainer(props) {
    return (
        <div className="column" style={{backgroundColor: '#BBB'}}>
            <div>
                {props.item.header.title}
            </div>
            <div>
                {props.item.header.subtitle}
            </div>
            <div>
                {props.item.content.description}
            </div>
        </div>
    )
}
