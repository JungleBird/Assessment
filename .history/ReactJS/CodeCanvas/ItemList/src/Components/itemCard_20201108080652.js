import React from 'react'
import PropTypes from 'prop-types'
import ItemHeader from './itemHeader';
import {ItemContent} from './ItemContent';

export default function ItemCard(props) {

    function displayItemHeader(item){
        return (item.header && <ItemHeader header={item.header}/>);
    }

    function displayItemContent(item){
        return (item.content && <ItemContent content={item.content}/>);
    }

    return (
        <div>
            {displayItemHeader(props.item)}
            {displayItemContent(props.item)}
        </div> 
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