import React from 'react'
import PropTypes from 'prop-types'

export default function ItemContentContainer(props) {

    const invalid = {
        title: 'No Title',
        subtitle: 'No subtitle',
        description: 'No description'
    }

    return (
        <div className="column" style={{backgroundColor: '#BBB'}}>
            {props.item.header && (props.item.header.title || invalid.title)}
            <br/>
            {props.item.header && (props.item.header.subtitle || invalid.subtitle)}
            <br/>
            {props.item.content && (props.item.content.description || invalid.description)}
        </div>
    )
}

ItemContentContainer.propTypes = {
    item: PropTypes.object.isRequired
}