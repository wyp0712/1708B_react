import React, { Component } from 'react'
import store from '../store/index'
import {
          getAddCartItem,
          getRemoveCartItem,
          initCartList
         } from '../store/actionCreator'
import HomeList from '../components/HomeList'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState() // 获取redux中的数据
    this.fn = store.subscribe(() => this.hanleStoreEvent() ) // 返回值用来接收监听
  }

  hanleStoreEvent = () => {
    this.setState(store.getState())
  }
 
  // 卸载的生命周期
  componentWillUnmount() {
    this.fn() // 取消监听
  }

  render() {
    // 一旦数据更新，就会重新执行render()
    return (
      <HomeList
        {...this.props}
        list={this.state.list}
        detailClick={ (item) => this.handleDetailClick(item)}
        removeClick={ (index) => this.handleRemoveEvent(index)  }
        addClick={ (index) => this.hanleAddEvent(index)  }
      > </HomeList>
    )
  }
  
  // 跳转详情页面
  handleDetailClick = (item) => {
    this.props.history.push(`/detail/${item.id}`)
  }
  
  // 请求数据
  componentDidMount() { // 在当前组件中，这个只执行一次，但是路由切换之后每次都会调用
    // action  init_cart_list  // 数据都教给redux去管理修改
    if (!this.state.list.length) {
      const action = initCartList()
      store.dispatch(action)
    }
  }

  // ++
  hanleAddEvent = (index) => {
    const action = getAddCartItem(index)
    store.dispatch(action)
  }
  
  // --
  handleRemoveEvent = (index) => {
    const action = getRemoveCartItem(index)
    store.dispatch(action)
  }

}
