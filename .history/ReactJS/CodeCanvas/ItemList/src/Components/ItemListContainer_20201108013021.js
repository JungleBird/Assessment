import React from 'react'
import PropTypes from 'prop-types'
import ItemLink from './ItemLink'

export default function ItemListContainer(props) {
    
    /*how to highlight selected item? useState hook*/

    return (
        <div>
            {console.log(props.itemsList)}
            

        </div>
    )
}
/*

            {props.itemsList && props.itemsList.map((item) => (
                <ItemLink key={item.id} id={item.id} header={item.header}/>
            ))}
            */
ItemListContainer.propTypes = {
    itemsList: PropTypes.array
}