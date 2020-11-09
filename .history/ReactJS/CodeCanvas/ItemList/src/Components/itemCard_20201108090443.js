import React from 'react'
import PropTypes from 'prop-types'
import ItemHeader from './itemHeader';
import ItemContent from './ItemContent';
import {ContentCard} from '../styles/itemDashboardStyles'

export default function ItemCard(props) {

    const displayItemHeader = (item) => {
        return (item.header && <ItemHeader {...item.header}/>);
    }

    const displayItemContent = (item) => {
        return (item.content && <ItemContent {...item.content}/>);
    }

    return (
        <ContentCard>
            {displayItemHeader(props)}
            {displayItemContent(props)}
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