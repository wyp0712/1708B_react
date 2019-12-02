import React, { Component, Fragment } from 'react'; // 解析jsx语法
import { findDomNode } from 'react-dom'

import TodoItem from './TodoItem'
import axios from 'axios'
import './mock/index'

// 受控组件
// 不受控组件
// 单项数据流 props
// class render必须存在的  TodoList 
class TodoList extends Component {
   constructor(props) {
      super(props)
      this.state = {
        inputValue: '',
        list: []
      }
   }

   // 挂载之前
   UNSAFE_componentWillMount() {
     console.log('UNSAFE_componentWillMount')
   }

   render() {
     console.log('render')
     return (
       <Fragment>
        <input type="text"
         value={this.state.inputValue}
         onChange={ this.handleInputEvent.bind(this) }
         ref="inputDom"
        />
        <button onClick={this.handleBtnClick.bind(this)}>确定提交</button>
        <ul>
          {
            this.getTodoItem()
          }
        </ul>
       </Fragment>
     )
   }

   getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
          <TodoItem 
            key={index}
            item={item}
            index={index}
            deleteItem={this.handleDeleteItem.bind(this, index)}
           />
        )   
    })
   }

   // 挂载之后  请求数据
   componentDidMount() {
     console.log(this.refs.inputDom, 'inputDom')
     console.log('componentDidMount')
     axios.get('/api/todolist').then(res => {
       console.log(res, 'res')
       this.setState(() => ({
         list: res.data
       }))
     })
   }

   handleInputEvent (e) {
    let value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
   }

   handleBtnClick() {
     this.setState(() => ({
       list: [...this.state.list, this.state.inputValue],
       inputValue: ''
     }))
   }

   handleDeleteItem(index) {
    //  this.state.list.splice(index, 1)
     let data = [...this.state.list]
     data.splice(index, 1)
     this.setState(() => ({
       list: data
     }))
   }
}

export default TodoList;