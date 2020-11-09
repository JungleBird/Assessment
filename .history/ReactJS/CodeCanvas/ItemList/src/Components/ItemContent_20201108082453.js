import React from 'react'
import PropTypes from 'prop-types'
import {DescriptionText} from '../styles/itemDashboardStyles'

export default function ItemContent(props) {

    function displayText(text) {
        return (text && text.length > 0) ? text : '';
    }

    return (
        <DescriptionText>
            {displayText(props.content.description)}
        </DescriptionText>
    );
}

ItemContent.propTypes = {
    content: PropTypes.shape({
        description: PropTypes.string
    }).isRequired
}