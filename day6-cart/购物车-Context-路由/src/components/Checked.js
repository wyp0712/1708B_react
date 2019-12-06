import React, { Component } from 'react'
export default class Checked extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          state: false,
          title: '苹果'
        },
        {
          state: false,
          title: '香蕉'
        }
      ],
      checkAll: false
    }
  }
  render() {
    return (
      <div>
        总：<input  type='checkbox' 
            checked={this.state.checkAll} 
            onChange={ () => this.handelCheckAll()} />
        <hr />
        {
          this.state.list.map((item, index) => {
            return (
              <div key={item.title}>
              {item.title}:<input type='checkbox' 
               checked={item.state} 
               onChange={ () => this.handleItemCheck(index)}
               />
              </div>
            )
          })
        }
      </div>
    )
  }

  handleItemCheck = (index) => {
    const list = [...this.state.list]
    // 点击每一个，改变选中状态并且赋值
    list[index].state = !list[index].state
    // 全为true 才为true 一个为false 就为false
    // 当flag的值改变的时候，重新赋值给上面的总的选中框
    let flag = list.every(item => {
      return item.state
    })
    this.setState({
      list: list,
      checkAll: flag
    })
  }

  handelCheckAll = () => {
    const list = [...this.state.list]
    // 改变true false
    this.setState({
      checkAll: this.state.checkAll = !this.state.checkAll
    })

    // 选中上面变下面 把上面总的状态值赋值给下面的每一个状态
    list.forEach(item => {
      item.state = this.state.checkAll
    })
  }
}
