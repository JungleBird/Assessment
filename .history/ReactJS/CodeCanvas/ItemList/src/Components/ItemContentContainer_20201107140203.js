import React from 'react'
import PropTypes from 'prop-types'

export default function ItemContentContainer(props) {

    if(!props.item){
        return null
    }
    /* reduce redundancy of these labels */
    const invalid = {
        title: 'No title',
        subtitle: 'No subtitle',
        description: 'No description'
    }

    return (
            <div>
                {props.item.header.title || invalid.title}
                <br/>
                {props.item.header.subtitle || invalid.subtitle}
                <br/>
                {props.item.content.description || invalid.description}
            </div>
    )
}

ItemContentContainer.propTypes = {
    item: PropTypes.shape({

        header: PropTypes.shape({
            title: PropTypes.string,
            subtitle: PropTypes.string
        }).isRequired,

        content: PropTypes.shape({
            description: PropTypes.string
        }).isRequired

    }).isRequired
}