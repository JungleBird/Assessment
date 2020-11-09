import React from 'react'
import PropTypes from 'prop-types'
import ItemHeader from './itemHeader';
import ItemContent from './ItemContent';
import {ItemCard} from '../styles/itemDashboardStyles'

export default function ItemCard(props) {

    function displayItemHeader(item){
        return (item.header && <ItemHeader {...item.header}/>);
    }

    function displayItemContent(item){
        return (item.content && <ItemContent {...item.content}/>);
    }

    return (
        <ItemCard>
            {displayItemHeader(props.item)}
            {displayItemContent(props.item)}
        </ItemCard> 
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