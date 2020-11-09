import React from 'react'
import PropTypes from 'prop-types'
import {TitleText, SubtitleText, HeaderBox} from '../styles/itemDashboardStyles'

export default function ItemHeader(props) {

    const displayText = (text = {}) => {
        return (text && text.length > 0) ? text : '';
    }

    return (
        <HeaderBox key={props.key} onClick={() => props.onClick()}>
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
    key: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    onClick: PropTypes.func
}