import React from 'react'
import PropTypes from 'prop-types'
import {ContentBox, TextArea} from '../styles/itemDashboardStyles'

export default function ItemContent(props) {

    const displayText = (text={}, emptyText='') => {
        return (text && text.length > 0) ? text : emptyText;
    }

    return (
        <ContentBox>
            <TextArea>
                {displayText(props.description, 'No Description')}
            </TextArea>
        </ContentBox>
    );
}

ItemContent.propTypes = {
    description: PropTypes.string
}