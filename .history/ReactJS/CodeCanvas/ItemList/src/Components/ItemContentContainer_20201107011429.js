import React from 'react'

export default function ItemContentContainer(props) {
    return (
        <div>
            {console.log(props.item.content.description)}
        </div>
    )
}
