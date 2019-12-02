import React, { Component } from 'react'
import mockJson from './mock/data.json'
import './TabControl.css'
const movieData = mockJson.movieList;

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
        <header>Tab Control</header> 
        <nav className="app-nav">
          {
            this.state.titleList.map((item, index) => {
              return (
                <span
                    key={index}
                    className={item.isTab === this.state.activeIndex ? 'app-tab active': 'app-tab'}
                    onClick={this.handleTabEvent.bind(this, item)}
                  >
                  {item.name}
                </span>
              )
            }) 
          }
        </nav>
        <hr />
        <ul>
          {
            this.state.movieData.map((val, ind) => {
              if (this.state.activeIndex === val.globalReleased) {
                return (
                  <li key={ind}>
                    <img src={val.img} alt={val.nm}/>
                    {val.nm}
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
    )
  }

  handleTabEvent(item) {
    this.setState(() => ({
      activeIndex: item.isTab
    }))
  }
}

export default TabControl;