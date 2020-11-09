import React from 'react'
import {DescriptionText} from '../styles/itemDashboardStyles'

export default function ItemContent(props) {
    return (
        <DescriptionText>
            {console.log(props)}
            {props.description}
        </DescriptionText>
    )
}
