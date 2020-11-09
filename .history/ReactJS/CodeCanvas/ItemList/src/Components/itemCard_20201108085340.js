import React from 'react'
import PropTypes from 'prop-types'
import ItemHeader from './itemHeader';
import ItemContent from './ItemContent';
import {ContentCard} from '../styles/itemDashboardStyles'

export const ItemCard = (props) => {
    return (
        <ContentCard>
            <ItemHeader {...props.header}/>
            <ItemContent {...props.content}/>
        </ContentCard> 
    )
}

ItemCard.propTypes = {
    item: PropTypes.shape({
        header: PropTypes.shape({
            title: PropTypes.string,
            subtitle: PropTypes.string
        }),
        content: PropTypes.shape({
            description: PropTypes.string
        })
    })
}