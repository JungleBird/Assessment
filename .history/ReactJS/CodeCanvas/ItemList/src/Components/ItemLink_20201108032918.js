import React from 'react'
import PropTypes from 'prop-types'

export const ItemLink = (props) => {

    const invalid = {
        title: 'No title',
        subtitle: 'No subtitle'
    }

    return (
        <div>
            <button onClick={() => props.onClick()}>
                <h1>{props.header.title || invalid.title}</h1>
                <p>{props.header.subtitle || invalid.subtitle}</p>
            </button>
        </div>
    )
}

ItemLink.propTypes = {
    header: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string
    }),
    id: PropTypes.number
}