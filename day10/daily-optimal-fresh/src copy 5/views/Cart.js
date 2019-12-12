import React, { Component,Fragment } from 'react'
import store from '../store/index'

import TotalNum from '../components/TotalPrice'

import { 
  HomeDiv,
  GoodsImg,
  ImgDiv,
  FontDiv,
  SpanDiv,
  BackDiv
} from './styleHome'

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
      <HomeDiv>
        <BackDiv onClick={ () => this.handleBackClick() } >back</BackDiv>
        { this.state.list.map((item, index) => {
           return item.count ? (
             <Fragment key={item.id}>
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
             </Fragment>
           ) : null;
        }) }
        {/* 总价组件 */}
        <TotalNum />
      </HomeDiv>
    )
  }

  handleBackClick = () => {

  }

  hanleAddEvent = (index) => {
    const action = {
      type: 'add_cart_item',
      index
    }
    store.dispatch(action)
  }

  handleRemoveEvent = (index) => {
    const action = {
      type: 'remove_cart_item',
      index
    }
    store.dispatch(action)
  }
}
