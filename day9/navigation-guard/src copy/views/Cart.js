import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import store from '../store/index'

export default class Cart extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(() => this.bindStoreEvent())
  }

  bindStoreEvent = () => {
    this.setState(store.getState())
  }

  render() {
    return (
      <div>
        { console.log(this.state, 'cart----cart') }
      </div>
    )
  }
}
