import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import { UserData } from '../mock/index'
// import Test from './Test'
import './style.css'
import axios from 'axios'
/**
 * 生命周期：
 * http://localhost:3000/
 */

 console.log(UserData, 'UserData')

class TodoList extends Component {
    constructor(props) {
        super(props)
        	// 当组件的state或者props发生改变的时候，render函数就会重新执行
        this.state = {
          inputValue: '',
          list: [],
          test: 'hello world-----react'
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
    }

    // 在组件即将被挂载到页面的时候自动执行
    UNSAFE_componentWillMount() {
      console.log('componentWillMount')
    }
    
    // 组件被挂载到页面之后，自动执行
    componentDidMount() {
      axios.get('/api/todolist')
      .then(res => {
        console.log(res, 'res')
      })
      .catch(e => {console.log(e)})
      console.log('componentDidMount')
    }
     
    // 组件被更新之前，他会自动执行
    shouldComponentUpdate() {
      console.log('shouldComponentUpdate')
      return true
    }
   
    // 组件更新完成之后，执行
    componentDidUpdate() {
      console.log('componentDidUpdate')
    }

    render() {
      console.log('parent- render1')
      return (
        <Fragment>
          <div>
            <label htmlFor="insertArea"> 输入内容 </label>
            <input
              className='input'
              id="insertArea"
              type="text"
              value={this.state.inputValue}
              onChange={this.handleInputChange} 
             />
            <button onClick={this.handleBtnClick}>提交</button>
          </div>
          <ul>
            {/* 引入循环函数 */}
            { this.getTodoItem() }
          </ul>
          {/* <Test content={ this.state.test }/> */}
        </Fragment>
      )
    }

    getTodoItem() {
      return this.state.list.map((item, index) => {
          return (
              <TodoItem
                key = {index}
                content = { item }
                index = { index }
                deteleItem = { this.handleDeleteItem }
              />
            )
        })
    }
    
    handleInputChange(e) {
      // console.log(e.target.value)
      let value = e.target.value
      this.setState(() => ({
        inputValue: value
      }))
    }
    
    // 绑定删除函数
    handleDeleteItem(index) {
      // const list = [...this.state.list]
      // list.splice(index, 1)
      // this.setState({
      //   list: list
      // })
      this.setState((prevState) => {
        const list = [...prevState.list]
        list.splice(index, 1)
        return { list }
      })
    }

    handleBtnClick(e) {
      // console.log([...this.state.list, this.state.inputVal], 'val')
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }), (prevState) => {
        // console.log(prevState, 'prevState')
      })
      // this.setState({
      //   list: [...this.state.list, this.state.inputValue],
      //   inputValue: ''
      // })
    }
}

export default TodoList