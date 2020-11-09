import React from 'react'
import PropTypes from 'prop-types'
import {ContentBox, Description} from '../styles/itemDashboardStyles'

export default function ItemContent(props) {

    const displayText = (text) => {
        return (text && text.length > 0) ? text : '';
    }

    return (
        <ContentBox>
            <Description>
                {displayText(props.description)}
            </Description>
        </ContentBox>
    );
}

ItemContent.propTypes = {
    description: PropTypes.string
}