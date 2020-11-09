import React from 'react'
import PropTypes from 'prop-types'
import ItemHeader from './itemHeader';
import ItemContent from './ItemContent';
import {ItemCardWrapper} from '../styles/itemDashboardStyles'

export default function ItemCard(props) {

    const displayItemHeader = (item) => {
        return (item.header && <ItemHeader {...item.header}/>);
    }

    const displayItemContent = (item) => {
        return (item.content && <ItemContent {...item.content}/>);
    }

    return (
        <ItemCardWrapper>
            {displayItemHeader(props)}
            {displayItemContent(props)}
        </ItemCardWrapper> 
    )
}

ItemCard.propTypes = {
    header: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string
    }),
    content: PropTypes.shape({
        description: PropTypes.string
    })
}