import React from 'react'
import PropTypes from 'prop-types'
import {Content} from '../styles/itemDashboardStyles'

export default function ItemContent(props) {

    function displayText(text) {
        return (text && text.length > 0) ? text : '';
    }

    return (
        <Content>
            {displayText(props.description)}
        </Content>
    );
}

ItemContent.propTypes = {
    description: PropTypes.string
}