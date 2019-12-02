import React, { Component } from 'react'



class NavList extends Component {
  render() {
    const { activeIndex, movieData } = this.props
    return (
      movieData.map((val, ind) => {
        if (activeIndex === val.globalReleased) {
          return (
            <li
              key={ind}
              className="list"
             >
              { val.state ? <i className="iconfont">&#xe64e;</i> : <i className="iconfont">&#xe6b3; </i> }
              <img src={val.img} alt={val.nm} onClick={this.handleClick.bind(this, ind)} />
              {/* {val.nm} */}
              <span dangerouslySetInnerHTML={{__html: val.nm}}></span>
              <span dangerouslySetInnerHTML={{__html: val.wishst}}></span>
            </li>
          )
        } else {
          return null
        }
      })
    )
  }

  handleClick(ind) {
    const { movieData } = this.props
    // this.setState(({
    //   movieData: movieData[ind].state = !movieData[ind].state
    // }))
    this.setState(() => ({
      movieData: movieData[ind].state = !movieData[ind].state
    }))
  }

}

export default NavList;