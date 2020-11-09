import React from 'react'
import PropTypes from 'prop-types'

export default function ItemHeader(props) {

    return (
        <div>
            <h1>{props.header.title}</h1>
            <p>{props.header.subtitle}</p>
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