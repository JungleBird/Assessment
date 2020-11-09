import React from 'react'
import PropTypes from 'prop-types'

export default function ItemContentContainer(props) {

    const invalid = {
        title: 'No Title',
        subtitle: 'No subtitle',
        description: 'No description'
    }

    return (
        <div className="column" style={{backgroundColor: '#BBB'}}>
            {props.item.header && 
                <div>
                    {props.item.header && (props.item.header.title || invalid.title)}
                    <br/>
                    {props.item.header && (props.item.header.subtitle || invalid.subtitle)}
                </div>
            }
            {props.content &&
                <div>
                    {props.item.content && (props.item.content.description || invalid.description)}
                </div>
            }
        </div>
    )
}

ItemContentContainer.propTypes = {
    item: PropTypes.object
}