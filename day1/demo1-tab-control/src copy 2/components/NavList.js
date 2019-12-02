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
              className={val.state ? 'list-active': null }
             >
              <img src={val.img} alt={val.nm} onClick={this.handleClick.bind(this, ind)} />
              {val.nm}
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
    this.setState(({
      movieData: movieData[ind].state = !movieData[ind].state
    }))
  }
}

export default NavList;