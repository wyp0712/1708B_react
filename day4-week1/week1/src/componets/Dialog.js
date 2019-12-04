import React, { Component } from 'react'

class Dialog extends Component {
  render() {
    // console.log(this.props, 'props')
    return <div className="dialog">
      <div className="mask"></div>
      <div className="tip">
        {this.props.children}
      </div>
    </div>
  }
}

export default Dialog;