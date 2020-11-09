import React from 'react'
import PropTypes from 'prop-types'
import ItemHeader from './itemHeader';
import ItemContent from './ItemContent';
import {ItemCardBox} from '../styles/itemDashboardStyles'

export default function ItemCard(props) {

    const displayItemHeader = (item) => {
        return (item.header && <ItemHeader canClick={false} {...item.header}/>);
    }

    const displayItemContent = (item) => {
        return (item.content && <ItemContent {...item.content}/>);
    }

    return (
        <ItemCardBox>
            {displayItemHeader(props)}
            {displayItemContent(props)}
        </ItemCardBox> 
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