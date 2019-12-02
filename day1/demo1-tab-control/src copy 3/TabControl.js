import React, { Component } from 'react'
import NavMovie from './components/NavMovie'
import NavList from './components/NavList'
import axios from 'axios'
import './mock/index'
import './TabControl.css'
import './static/iconfont/iconfont.css'

class TabControl extends Component {
  constructor(props) {
    super(props)
    const titleList = [
      { name: '正在上映', ind: 0, isTab: true },
      { name: '即将上映', ind: 1, isTab: false },
    ]
    this.state = {
      activeIndex: true,
      movieData: [],
      titleList
    }
  }

  componentDidMount() {
    axios.get('/api/movie').then(res => {
      console.log(res.data, 'res')
      this.setState(() => ({
        movieData:res.data
      }))
    })
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