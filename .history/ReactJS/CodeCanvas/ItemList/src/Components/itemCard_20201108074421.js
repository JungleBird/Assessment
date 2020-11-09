import React from 'react'
import PropTypes from 'prop-types'
import {ItemHeader} from './itemHeader';
import {ItemContent} from './ItemContent';

export default function ItemCard(props) {

    return (
        <div>
            {props.header && <ItemHeader header={props.header}/>}
            {props.content && <ItemContent content={props.content}/>}
        </div> 
    )
}

ItemCard.propTypes = {
    items: PropTypes.shape({
        viewitem: PropTypes.shape({
            header: PropTypes.shape({
                title: PropTypes.string,
                subtitle: PropTypes.string
            }),
            content: PropTypes.shape({
                description: PropTypes.string
            })
        })
    })
}