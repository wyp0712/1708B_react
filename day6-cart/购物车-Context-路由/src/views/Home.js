import React from 'react'
// import styled from 'styled-components';
import {  Route, Link, Switch } from 'react-router-dom'
// import Tab1 from './Tab1'
// import Tab2 from './Tab2'
import RouterView from '../router/routerConfig'

const Home = ({routes, match}) => {
  // console.log(routes, 'route')
  return (
    <div className="home">
      home
      <a href='/detail/1'>跳转详情页面</a>
      {/* <Link to="/home/tab1">tab1</Link>
      <Link to="/home/tab2">tab2</Link>
      <RouterView routes={routes}/> */}
    </div>
  )
}

export default Home