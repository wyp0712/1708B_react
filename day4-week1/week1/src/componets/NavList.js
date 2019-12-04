import React, { Component,Fragment } from 'react';

class NavTitle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flag: true
    }
  }

  componentDidMount() {
    // console.log('componentDidMount')
  }

  // shouldComponentUpdate(content) {
  //   console.log()
  // }

  render() {
    const { index, item } = this.props
    return (
      <Fragment>
        <li key={index}>
          <img onClick={(index) => this.handleIconClick(index)}  src={item.img} alt={item.title}/>
          <span dangerouslySetInnerHTML={{__html:item.title}}></span> 
          {
            item.state ? <span  className="iconfont">&#xe64e;</span> :  <span  className="iconfont">&#xe6b3;</span>
          }
      </li>
      </Fragment>


    )
  }

  handleIconClick (index)  {
    const { iconClick } = this.props
    iconClick(index)
  }


}

export default NavTitle