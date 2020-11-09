import React from 'react'
import PropTypes from 'prop-types'
import {Title, Subtitle, Header} from '../styles/itemDashboardStyles'

export default function ItemHeader(props) {

    function displayText(text) {
        return (text && text.length > 0) ? text : '';
    }

    return (
        <Header>
            <Title>{displayText(props.title)}</Title>
            <Subtitle>{displayText(props.subtitle)}</Subtitle>
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