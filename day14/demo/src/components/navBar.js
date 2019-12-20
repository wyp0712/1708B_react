import React, { Component, Fragment } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div className="app-nav">
        <div className="nav-tag">
          <div className="nav-tag-content">
            <span>区域</span>
            <span>价格</span>
            <span>房型</span>
            <span>更多</span>
            <span>排序</span>
          </div>
        </div>
        {/* <div className="nav-more">
          <i className="iconfont">&#xe61c;</i>
        </div> */}
      </div>
    )
  }
}
