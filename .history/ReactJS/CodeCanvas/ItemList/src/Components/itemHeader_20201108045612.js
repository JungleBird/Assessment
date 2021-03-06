import React from 'react'
import PropTypes from 'prop-types'

export default function ItemHeader(props) {

    const invalid = {
        title: 'No title',
        subtitle: 'No subtitle'
    }

    return (
        <div>
            <h1>{props.header.title || invalid.title}</h1>
            <p>{props.header.subtitle || invalid.subtitle}</p>
        </div>
    )
}

ItemHeader.propTypes = {
    header: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string
    }),
    onClick: PropTypes.func
}