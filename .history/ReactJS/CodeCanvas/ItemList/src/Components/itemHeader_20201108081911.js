import React from 'react'
import PropTypes from 'prop-types'
import {Title, Subtitle, Header} from '../styles/itemDashboardStyles'

export default function ItemHeader(props) {

    function displayTitle(header) {
        return (header.title && title.length > 0) ? title : 'Untitled';
    }

    function displayText(text) {
        return (text && text.length > 0) ? text : '';
    }

    return (
        <Header>
            <Title>{displayTitle(props.header)}</Title>
            <Subtitle>{displayText(props.header)}</Subtitle>
        </Header>
    );
}

ItemHeader.propTypes = {
    header: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string
    }),
    onClick: PropTypes.func
}