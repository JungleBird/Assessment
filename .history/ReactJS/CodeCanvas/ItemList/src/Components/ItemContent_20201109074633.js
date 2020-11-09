import React from 'react'
import PropTypes from 'prop-types'
import {ContentWrapper, TextArea} from '../styles/itemDashboardStyles'

export default function ItemContent(props) {

    const displayText = (text={}, emptyText='') => {
        return (text && text.length > 0) ? text : emptyText;
    }

    return (
        <ContentWrapper>
            <TextArea>{displayText(props.description, 'No Description')}</TextArea>
        </ContentWrapper>
    );
}

ItemContent.propTypes = {
    description: PropTypes.string
}