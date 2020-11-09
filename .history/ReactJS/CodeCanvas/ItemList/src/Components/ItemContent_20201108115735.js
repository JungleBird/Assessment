import React from 'react'
import PropTypes from 'prop-types'
import {ContentBox, TextArea} from '../styles/itemDashboardStyles'

export default function ItemContent(props) {

    const displayText = (text = {}) => {
        return (text && text.length > 0) ? text : '';
    }

    return (
        <ContentBox>
            <TextArea>
                {displayText(props.description)}
            </TextArea>
        </ContentBox>
    );
}

ItemContent.propTypes = {
    description: PropTypes.string
}