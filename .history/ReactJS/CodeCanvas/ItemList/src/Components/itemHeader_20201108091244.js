import React from 'react'
import PropTypes from 'prop-types'
import {Title, Subtitle, HeaderBox} from '../styles/itemDashboardStyles'

export default function ItemHeader(props) {

    const displayText = (text) => {
        return (text && text.length > 0) ? text : '';
    }

    return (
        <HeaderBox>
            <Title>
                {displayText(props.title)}
            </Title>
            <Subtitle>
                {displayText(props.subtitle)}
            </Subtitle>
        </HeaderBox>
    );
}

ItemHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    onClick: PropTypes.func
}