import React from 'react'
import PropTypes from 'prop-types'
import {Title, Subtitle, Header} from '../styles/itemDashboardStyles'

export default function ItemHeader(props) {

    function displayTitle(title) {
        return (title && title.length > 0) ? title : 'Untitled';
    }

    function displayText(text) {
        return (text && text.length > 0) ? text : '';
    }

    return (
        <Header>
            <Title>{displayTitle(props.header.title)}</Title>
            <Subtitle>{displayText(props.header.subtitle)}</Subtitle>
        </Header>
    );
}

ItemHeader.propTypes = {
    header: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string
    }).isRequired,
    onClick: PropTypes.func
}