import './ItemDisplayContainer.css'
import ItemList from './Components/ItemList'
import data from './Data/ItemListData.json'

import React, { Component } from 'react'

export class ItemDisplayContainer extends Component {
  render() {
    return (
      <div className="row">
        <div className="column" style={{backgroundColor: '#AAA'}}>
          <ItemList items={data.items}/>
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