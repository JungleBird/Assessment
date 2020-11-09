import React from 'react'
import PropTypes from 'prop-types'
import {TitleText, SubtitleText, HeaderWrapper} from '../styles/itemDashboardStyles'

export default function ItemHeader(props) {

    const displayText = (text={}, emptyText='') => {
        return (text && text.length > 0) ? text : emptyText;
    }

    return (
        <HeaderWrapper onClick={props.canClick ? () => props.onClick() : undefined}>
            <TitleText>{displayText(props.title, 'No Title')}</TitleText>
            <SubtitleText>{displayText(props.subtitle, 'No subtitle')}</SubtitleText>
        </HeaderWrapper>
    );
}

ItemHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    canClick: PropTypes.bool,
    onClick: PropTypes.func
}