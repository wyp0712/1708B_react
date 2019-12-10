import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import store from '../store/index'
import RouterView from '../router/index'
import { Link,Redirect } from 'react-router-dom'

export default class Cart extends Component {
  static propTypes = {

  }
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.fn = store.subscribe(() => this.bindStoreEvent())
  }

  bindStoreEvent = () => {
    this.setState(store.getState())
  }

  componentWillUnmount() {
    this.fn()
  }

  render() {
    return (
      <div>
        {/* { console.log(this.props.routes, 'this.props.routes') } */}
         <Link to="/cart/tab1">tab1页面</Link> |
         <Link to="/cart/tab2">tab2页面</Link>  <br/> 
         { console.log(this.props, '------------------prop') }

       <RouterView {...this.props} routes={this.props.routes}/>

        { this.state.cartList.map(item => {
           return (
             <div key={item.id}>
               <img src={item.img} alt=''/>
               {item.num}
               {item.nm}
             </div>
           )
        })}
      </div>
    )
  }
}
