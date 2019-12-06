import React, { Component } from 'react'

class TotalPrice extends Component {
  render() {
    console.log(this.props.total())
    return <div>{this.props.total()}</div>
  }
}

export default TotalPrice;