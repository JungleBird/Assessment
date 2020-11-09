import './ItemDisplayContainer.css'
import ItemDisplayList from './Components/ItemDisplayList'
import data from './Data/ItemListData.json'

import React, { Component } from 'react'

export class ItemDisplayContainer extends Component {
  render() {
    return (
      <div className="row">
        <div className="column" style={{backgroundColor: '#AAA'}}>
          <ItemDisplayList items={data}/>
        </div>
        <div className="column" style={{backgroundColor: '#BBB'}}>
          <h2>Column 2</h2>
          <p>Some text..</p>
        </div>
      </div>
    )
  }
}

export default ItemDisplayContainer