import React, { Component } from 'react';
import './App.scss';
// import { Button,InputItem } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './mock/index'
import { BrowserRouter } from 'react-router-dom'
import FooterBar from './components/FooterBar'
import './static/iconfont/iconfont.css'
import RouterView from './router/index'
import config from './router/config'
// 样式模块化
import styled from 'styled-components';

const AppWrapper = styled.div`
   width:100vw;
   height:100vh;
   display:flex;
   flex-direction:column;
`;

const HeaderDiv = styled.div`
  width: 100vw;
  height: 45px;
  background: skyblue;
  ${props=>`color:${props.primary?"white":"red"}`}
`;

const MainDiv = styled.main`
  width: 100vw;
  flex:1;
  overflow: auto;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <BrowserRouter>
          <HeaderDiv primary>我是头部</HeaderDiv>
          <MainDiv>
             <RouterView routes={config}></RouterView>
          </MainDiv>
          <FooterBar></FooterBar>
        </BrowserRouter>
      </AppWrapper>
    );
  }

  componentDidMount() {
    // fetch('/data.json')
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(e => console.log("Oops, error", e))
  }
}

export default App;
