import React, { Component } from 'react';

class NavTitle extends Component {

  render() {
    const { index, item, tabIndex } = this.props
    return (
       <span
        className={tabIndex === item.index ? 'active': ''  }
        key={index}
        onClick={this.bindNavClick }
       >
        {item.title}
       </span>
    )
  }
  
  // class没有绑定this到当前对象
  bindNavClick (index) {
    console.log(this)
    // const { navClick } = this.props
    // console.log(navClick, 'navClick')
    // navClick(index)
  }

}

export default NavTitle