import React from 'react'
import PropTypes from 'prop-types'
import ItemLink from './ItemLink'

export default function ItemListContainer(props) {
    
    /*how to highlight selected item? useState hook*/

    return (
        <div>
            {console.log(props.items.itemsList)}
            {props.items.itemsList && props.items.itemsList.map((item) => (
                <ItemLink key={item.id} id={item.id} header={item.header}/>
            ))}
        </div>
    )
}

ItemListContainer.propTypes = {
    itemsList: PropTypes.array
}