import React from 'react'
import PropTypes from 'prop-types'
import ItemLink from './ItemLink'

export default function ItemListContainer(props) {
    
    /*how to highlight selected item? useState hook*/

    return (
        <div className="column" style={{backgroundColor: '#AAA'}}>
            {props.items && props.items.map((item) => (
                <ItemLink key={item.id} id={item.id} header={item.header} onItemClick={props.onItemClick}/>
            ))}
        </div>
    )
}

ItemListContainer.propTypes = {
    items: PropTypes.array,
    onClick: PropTypes.func
}