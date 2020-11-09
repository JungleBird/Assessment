//import logo from './logo.svg';
import './ItemDisplayContainer.css'
import './Components/ItemDisplayList'


import React, { Component } from 'react'

export class ItemDisplayContainer extends Component {
  render() {
    return (
      <div className="row">
        <div className="column" style={{backgroundColor: '#AAA'}}>
          <h2>Column 1</h2>
          <p>Some text..</p>
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