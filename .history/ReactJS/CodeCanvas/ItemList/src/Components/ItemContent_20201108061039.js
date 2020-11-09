import React from 'react'
import {DescriptionText} from '../styles/itemDashboardStyles'

export default function ItemContent(props) {
    return (
        <DescriptionText>{props.description}</DescriptionText>
    )
}
