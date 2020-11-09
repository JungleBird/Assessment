import React from 'react'
import PropTypes from 'prop-types'
import {ItemHeader} from './itemHeader';
import {ItemContent} from './ItemContent';

export default function ItemCard(props) {

    return (
        <div>
            {props.item.header && <ItemHeader header={props.item.header}/>}
            {props.item.content && <ItemContent content={props.item.content}/>}
        </div> 
    )
}