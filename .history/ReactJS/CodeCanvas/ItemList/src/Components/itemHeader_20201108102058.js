import React from 'react'
import PropTypes from 'prop-types'
import {TitleText, SubtitleText, HeaderBox} from '../styles/itemDashboardStyles'

export default function ItemHeader(props) {

    const displayText = (text) => {
        return (text && text.length > 0) ? text : '';
    }

    return (
        <HeaderBox>
            <TitleText>
                {displayText(props.title)}
            </TitleText>
            <SubtitleText>
                {displayText(props.subtitle)}
            </SubtitleText>
        </HeaderBox>
    );
}

ItemHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    onClick: PropTypes.func
}