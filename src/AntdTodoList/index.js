import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from '../store/index'
import '../mock/index'
import { getTodoList, getAddItemAction, getDeleteItemAction, getInputChangeAction, getInitItemAction } from '../store/actionCreators'
import TodoListUi from './TodoListUi'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.bindInputChange = this.bindInputChange.bind(this)
    this.bindStoreChange = this.bindStoreChange.bind(this)
    this.bindBtnClick = this.bindBtnClick.bind(this)
    this.bindDeleteItem = this.bindDeleteItem.bind(this)
    store.subscribe(this.bindStoreChange)
  }

  componentDidMount() {
    const action = getTodoList()
    store.dispatch(action)
    // axios.get('/api/todolist')
    // .then(res => {
    //   let data = res.data
    //   const action = getInitItemAction(data)
    //   store.dispatch(action)
    // })
  }

  render() {
    return (
      <TodoListUi
        list = {this.state.list}
        inputValue={this.state.inputValue}
        bindInputChange={this.bindInputChange}
        bindBtnClick={this.bindBtnClick}
        bindDeleteItem={this.bindDeleteItem}
      />
    )
  }
  
  // 删除事件
  bindDeleteItem(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
  
  // 点击
  bindBtnClick() {
    const action = getAddItemAction()
    console.log(action, 'action')
    store.dispatch(action)
  }

  bindInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  bindStoreChange() {
    this.setState(store.getState())
  }

}

export default TodoList;