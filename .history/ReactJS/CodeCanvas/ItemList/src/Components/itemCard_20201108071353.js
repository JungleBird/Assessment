import React from 'react'
import PropTypes from 'prop-types'
import {ItemHeader} from './itemHeader';
import {ItemContent} from './ItemContent';

export default function ItemCard(props) {

    return (
        <div>
            <ItemHeader header={props.item.header}/>
            <ItemContent content={props.item.content}/>
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
    }).isRequired
}