import React from 'react'
import PropTypes from 'prop-types'
import {DescriptionText} from '../styles/itemDashboardStyles'

export const ItemContent = (props) => {
    return (
        <DescriptionText>{props.content.description}</DescriptionText>
    );
}

ItemContent.propTypes = {
    content: PropTypes.shape({
        description: PropTypes.string
    }).isRequired
}