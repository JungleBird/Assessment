import React from 'react'

export default function ItemContentContainer(props) {
    if(!props.item){
        return null;
    }

    return (
        <div className="column" style={{backgroundColor: '#BBB'}}>
            <div>
                {props.item.header && props.item.header.title}
            </div>
            <div>
                {props.item.header && (props.item.header.subtitle || 'No subtitle')}
            </div>
            <div>
                {props.item.content && (props.item.content.description || 'No description')}
            </div>
        </div>
    )
}
