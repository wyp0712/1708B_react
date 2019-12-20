import React, { Component, Fragment } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div className="app-nav">
        <div className="nav-tag">
          <div className="nav-tag-content">
            <span>推荐</span>
            <span>视频</span>
            <span>入门</span>
            <span>推荐</span>
            <span>推荐</span>
            <span>推荐</span>
          </div>
        </div>
        <div className="nav-more">
          <i className="iconfont">&#xe61c;</i>
        </div>
      </div>
    )
  }
}
