import React, { Component } from 'react'

class Header extends Component {
  render() {
    const { isCheckAll } = this.props
    return <div >
      <input  type="checkbox" checked={isCheckAll} onChange={ () => this.handleCheckAllEvent() }/> 
      购物车 </div>
  }

  handleCheckAllEvent = () => {
    const { isCheckAll, checkAllEvent } = this.props
    // react单向数据流
    let flag = isCheckAll
    flag = !flag
    // 子父组件回调函数
    checkAllEvent(flag)
  }
}

export default Header;