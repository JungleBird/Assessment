import React from 'react'
import PropTypes from 'prop-types'

export default function ItemContentContainer(props) {

    if(!props.item){
        return null;
    }

    const invalid = {
        title: 'No Title',
        subtitle: 'No subtitle',
        description: 'No description'
    }

    return (
        <div className="column" style={{backgroundColor: '#BBB'}}>
            <div>
                {props.item.header && (props.item.header.title || invalid.title)}
            </div>
            <div>
                {props.item.header && (props.item.header.subtitle || invalid.subtitle)}
            </div>
            
            <div>
                {props.item.content && (props.item.content.description || invalid.description)}
            </div>
        </div>
    )
}

ItemContentContainer.propTypes = {
    item: PropTypes.object
}