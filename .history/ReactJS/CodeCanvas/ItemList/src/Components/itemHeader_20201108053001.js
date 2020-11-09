import React from 'react'
import PropTypes from 'prop-types'
import {Title} from '../styles/itemDashboardStyles'

export default function ItemHeader(props) {

    function displayTitle(title) {
        return (title && title.length > 0) ? title : 'Untitled';
    }

    function displayText(text) {
        return (text && text.length > 0) ? text : '';
    }

    const invalid = {
        title: 'No title',
        subtitle: 'No subtitle'
    }

    return (
        <div>
            <Title>{displayTitle(props.header.title)}</Title>
            <Subtitle>{displayText(props.header.subtitle)}</Subtitle>
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