import React, { Component } from 'react'
import store from '../store/index'

export default class componentName extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState() // 拿到store中的数据  
    this.fn = store.subscribe(() => this.storeEvent()) // 监听store中的数据
  }

  storeEvent = () => {
    this.setState(store.getState()) // 设置数据
  }

  componentWillUnmount() { // 取消监听
    this.fn()
  }

  render() {
    return (
      <div>
        <input
           value={this.state.inputValue} 
           onChange={ (e) => this.handleInputChange(e) } /> 
           <button onClick={ () => this.handleBtnClick() }>确定</button>
         <ul>
           {
             this.state.list.map((item, index) => {
               return <li onClick={ () => this.handleDeleteClick(index) } key={index}>{item}</li>
             })
           }
          </ul>
      </div>
    )
  }

  // 把所有原先基于事件的操作都变为action  ajax
  handleInputChange = (e) => {
    const value = e.target.value;
    const action = {
      type: 'init_input_value',
      value
    }
    store.dispatch(action)
  }

  handleBtnClick = () => {
    const action = {
      type: 'add_input_value',
    }
    store.dispatch(action)
  }

  handleDeleteClick = (index) => {
    const action = {
      type: 'remove_input_value',
      index
    }
    store.dispatch(action)
  }
}
