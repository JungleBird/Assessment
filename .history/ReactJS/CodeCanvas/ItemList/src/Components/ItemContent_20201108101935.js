import React from 'react'
import PropTypes from 'prop-types'
import {ContentBox, DescriptionText} from '../styles/itemDashboardStyles'

export default function ItemContent(props) {

    const displayText = (text) => {
        return (text && text.length > 0) ? text : '';
    }

    return (
        <ContentBox>
            <DescriptionText>
                {displayText(props.description)}
            </DescriptionText>
        </ContentBox>
    );
}

ItemContent.propTypes = {
    description: PropTypes.string
}