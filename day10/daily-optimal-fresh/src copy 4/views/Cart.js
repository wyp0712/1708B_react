import React, { Component } from 'react'
import store from '../store/index'

import axios from 'axios'
import { 
  HomeDiv,
  GoodsImg,
  ImgDiv,
  FontDiv,
  SpanDiv
} from './styleHome'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = store.getState();
    this.fn = store.subscribe(() => this.storeEvent())
    // console.log(this.fn, 'fn---')
  }

  storeEvent = () => {
    this.setState(store.getState())
  }

  render() {
    // 一旦数据更新，就会重新执行render()
    console.log(this.state, 'state----state')
    return (
      <HomeDiv>
          { this.state.list.map((item, index) => {
            return item.count ? (
                <GoodsImg key={item.id}>
                  <ImgDiv className="img">
                    <img src={item.img} alt=''/>
                  </ImgDiv>
                  <FontDiv className="font">
                    <SpanDiv onClick={ () => this.handleRemoveEvent(index) } >-</SpanDiv>
                    <SpanDiv>{item.count}</SpanDiv>
                    <SpanDiv onClick={ () => this.hanleAddEvent(index) }>+</SpanDiv>
                  </FontDiv>
                </GoodsImg>
               ): null
          }) }
      </HomeDiv>
    )
  }

  componentDidMount() {
    // action: store.dispatch  subscribe
    // axios.get('/api/list').then(res => {
    //   const data = res.data;
    //   const action = {
    //     type: 'init_cart_list',
    //     data
    //   }
    //   store.dispatch(action)
    // })
  }

  hanleAddEvent = (index) => {
    // const list = [...this.state.list]
    // list[index].count++;
    // this.setState(() => ({
    //   list: list
    // }))
    const action = {
      type: 'add_cart_item',
      index
    }
    store.dispatch(action)
  }

  handleRemoveEvent = (index) => {
    // const list = [...this.state.list]
    // list[index].count--;
    // this.setState(() => ({
    //   list: list
    // }))
    const action = {
      type: 'remove_cart_item',
      index
    }
    store.dispatch(action)
  }

  // 卸载生命周期
  componentWillUnmount() {
    this.fn() // 卸载监听订阅函数
  }
}
