import React, { Component } from 'react'
import RouterView from '../router/index'
import { NavLink } from 'react-router-dom'

export default class CartTabTab extends Component {
  
  render() {
    console.log(this.props, 'props----props')
    return (
      <div>
        <NavLink to='/cart/tab1/show'/>
        {/* {console.log(this.props.routes, 'this.props.routes')} */}

        {/* <RouterView  routes={this.props.routes} /> */}
      </div>
    )
  }
}
