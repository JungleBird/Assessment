import React from 'react'
import PropTypes from 'prop-types'
import ItemHeader from './itemHeader';
import ItemContent from './ItemContent';
import {ContentCard} from '../styles/itemDashboardStyles'

export default function ItemCard(props) {

    const displayItemHeader = (props) => {
        return (props.header && <ItemHeader {...props.header}/>);
    }

    const displayItemContent = (props) => {
        return (props.content && <ItemContent {...props.content}/>);
    }

    return (
        <ContentCard>
            {displayItemHeader()}
            {displayItemContent()}
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