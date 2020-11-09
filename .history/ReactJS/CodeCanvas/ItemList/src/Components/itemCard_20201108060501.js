import React from 'react'
import PropTypes from 'prop-types'
import ItemHeader from './itemHeader';

export default function ItemCard(props) {

    return props.item && (
        <div>
            <div>
                <ItemHeader header={props.item.header}/>
            </div>
            <div>
                {props.item.content.description}
            </div>
        </div> 
    )
}
ItemCard.propTypes = {
    item: PropTypes.shape({

        header: PropTypes.shape({
            title: PropTypes.string,
            subtitle: PropTypes.string
        }).isRequired,

        content: PropTypes.shape({
            description: PropTypes.string
        }).isRequired

    }).isRequired
}