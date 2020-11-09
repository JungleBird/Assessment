import React from 'react'
import PropTypes from 'prop-types'
import {DescriptionText} from '../styles/itemDashboardStyles'

export default function ItemContent(props) {

    function displayText(text) {
        return (text && text.length > 0) ? text : '';
    }

    return (
        <DescriptionText>
            {displayText(props.description)}
        </DescriptionText>
    );
}

ItemContent.propTypes = {
    description: PropTypes.string
}