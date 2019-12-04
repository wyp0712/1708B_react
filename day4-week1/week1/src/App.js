import React, { Component } from 'react';
import './App.scss';
import './mock/index'
import axios from 'axios'
import NavTitle from './componets/NavTitle'
import NavList from './componets/NavList'
import Dialog from './componets/Dialog'

class TabCom extends Component {
  constructor(props) {
    super(props)
    const navList = [
      {title:'全部', index: 0},
      {title:'产品', index: 1},
      {title:'设计', index: 2},
      {title:'前端', index: 3},
      {title:'后端', index: 4}
    ]
    this.state = {
      navList,
      listArr: [],
      user: '',
      pwd: '',
      selectValue: '',
      tabIndex: 0,
      isMask: true
    }
    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleSelect = this.handleSelect.bind(this)
  }
  /* class  className  for   htmlFor */
  render() {
    const { tabIndex } = this.state
    return (
      <div className="app-tab" >
        { this.state.isMask && <Dialog>
          <div onClick={this.handleEvent}>hello world</div>
            </Dialog>  
        }
        <nav className="nav">
          {
            this.state.navList.map((item,index) => {
              return (
                <NavTitle
                index={index} 
                item={item}
                key={index}
                tabIndex={tabIndex}
                navClick={ this.hanleNavClick }
                />
              )
            })
          }
        </nav>
        <ul>
          { this.getListArr() }
        </ul>
      </div>
    )
  }

  handleEvent = () => {
    this.setState({
      flag: this.state.isMask = !this.state.isMask, 
    })
  }

  getListArr() {
    return this.state.listArr.map((item, index) => {
      if (item.id === this.state.tabIndex) {
        return (
          <NavList
            index={index}
            item={item}
            key={index}
            iconClick={ () =>  this.handleIconClick(index) }
          />
        )
      } else {
        return null
      }
    })
  }

  handleIconClick = (index) => {
    let list = [...this.state.listArr]
    list[index].state = !list[index].state
    this.handleEvent()
    this.setState(() => ({
      listArr: list
    }))
  }

  hanleNavClick(index) {
    this.setState(() => ({
      tabIndex: index
    })) 
  }

  handleInputChange(e) {
    const target = e.target;
    this.setState(() => ({
      [target.name]: target.value
    }))
  }

  handleSelect(e) {
    const target = e.target;
     this.setState(() => ({
      selectValue: target.value
    }))
  }

  componentDidMount() {
    axios.get('/api/tab').then(res => {
      res.data.forEach(item => {
        item.state = false
      })
      this.setState(() => ({
        listArr: res.data
      }))
    })

    axios.get('/api/list?id=1').then(res => {
      //  console.log(res, 'res') 
    })

    // axios.post('/api/tab', {
    //   params: 2
    // }).then(res => {
    //   console.log(res, 'res')
    // })
  }
}

export default TabCom;
