import React, { Component } from 'react'
import mockJson from './mock/data.json'
import './TabControl.css'
import NavMovie from './components/NavMovie'
import NavList from './components/NavList'
const movieData = mockJson.movieList;
movieData.forEach(item => {
  item.state = false
})

console.log(movieData, 'movieData')

class TabControl extends Component {
  constructor(props) {
    super(props)
    const titleList = [
      { name: 'tab1', ind: 0, isTab: true },
      { name: 'tab2', ind: 1, isTab: false },
    ]
    this.state = {
      activeIndex: true,
      movieData,
      titleList
    }
  }

  render() {
    return (
      <div>
        <nav className="app-nav">
         {this.getMovieNav()}
        </nav>
        <ul>
          {this.getMovieList()}
        </ul>
      </div>
    )
  }

  getMovieNav() {
    const { titleList, activeIndex } = this.state
    return (
      titleList.map((item, index) => {
        return (
          <NavMovie
            key={index} // prop
            index={index} // 传递下标
            item={item}   // 每一条数据
            activeIndex={activeIndex} // 
            handleTabEvent={this.handleTabEvent.bind(this, item)}
          />
        )
      })
    )
  }

  // list
  getMovieList() {
    let { movieData, activeIndex } = this.state
    return (
      <NavList
        activeIndex={activeIndex}
        movieData={movieData}
      />
    )
  }


  // 绑定tab事件
  handleTabEvent(item) {
    this.setState(() => ({
      activeIndex: item.isTab
    }))
  }
}

export default TabControl;