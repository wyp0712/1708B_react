import React, { Component } from 'react'

// es6创建方式
class NavMovie extends Component {
  render() {
    const { item, index, activeIndex } = this.props
    return (
      <span
        key={index}
        className={item.isTab === activeIndex ? 'app-tab active': 'app-tab'}
        onClick={this.handleTabEvent.bind(this, item)}
      >
       {item.name}
      </span>
    )
  }

  handleTabEvent(item) {
    let { handleTabEvent } = this.props;
    handleTabEvent(item)
  }
}

export default NavMovie;