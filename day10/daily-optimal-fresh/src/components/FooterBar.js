import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import store from '../store/index'

export default class FooterBar extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState();
    this.fn = store.subscribe(() => this.storeEvent())
  }

  componentWillUnmount() {
    this.fn()
  }

  storeEvent = () => {
    this.setState(store.getState())
  }

  shouldComponentUpdate(nextProps) {
    // console.log(nextProps, 'nextProps')
    // console.log('shouldComponentUpdate')
    return true
  }

  render() {
    console.log('render----footerbar')
    return (
      <FootDiv>
        <NavLink to='/home'>
          <i className="iconfont">&#xe6a5;</i>
          <span>首页</span>
        </NavLink>
        <NavLink to='/cart'>
          <i className="iconfont">&#xe602;</i>
          <span>购物车 {this.state.totalCount} </span>
        </NavLink>
        <NavLink to='/login'>
          <i className="iconfont">&#xe602;</i>
          <span>登陆</span>
        </NavLink>
      </FootDiv>
    )
  }
}



const FootDiv = styled.div`
  width: 100vw;
  height: 45px;
  display:flex;
  a {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    i {
      flex:6;  
    }
    span {
      flex:4;
    }
  }
  .active {
    color: red;
  }
`;