import React, { Component } from 'react'

class TotalPrice extends Component {
  render() {
    return <div>{this.props.total()}</div>
  }
}

export default TotalPrice;