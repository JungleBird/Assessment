import React from 'react'
import PropTypes from 'prop-types'
import {Title, Subtitle} from '../styles/itemDashboardStyles'

export default function ItemHeader(props) {

    function displayTitle(title) {
        return (title && title.length > 0) ? title : 'Untitled';
    }

    function displayText(text) {
        return (text && text.length > 0) ? text : '';
    }

    return (
        <span>
            <Title>{displayTitle(props.header.title)}</Title>
            <Subtitle>{displayText(props.header.subtitle)}</Subtitle>
        </span>
    );
}

ItemHeader.propTypes = {
    header: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string
    }),
    onClick: PropTypes.func
}