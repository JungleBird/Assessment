import React from 'react'
import {DescriptionText} from '../styles/itemDashboardStyles'

export const ItemContent = (props) => {
    return (
        <DescriptionText>{props.content.description}</DescriptionText>
    );
}
