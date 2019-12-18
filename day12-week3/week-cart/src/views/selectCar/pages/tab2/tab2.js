import React, { Component } from 'react'
import RouterView from '../../../../router/index'
export default class componentName extends Component {
  render() {
    return (
      <div>
        tab2
        <RouterView {...this.props} redirect='/selectcar/tab2/user' routes={this.props.routes}></RouterView>
      </div>
    )
  }
}
