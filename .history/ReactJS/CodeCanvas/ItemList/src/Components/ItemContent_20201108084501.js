import React from 'react'
import PropTypes from 'prop-types'
import {Content, DescriptionText} from '../styles/itemDashboardStyles'

export default function ItemContent(props) {

    function displayText(text) {
        return (text && text.length > 0) ? text : '';
    }

    return (
        <Content>
            <DescriptionText>{displayText(props.description)}</DescriptionText>
        </Content>
    );
}

ItemContent.propTypes = {
    description: PropTypes.string
}