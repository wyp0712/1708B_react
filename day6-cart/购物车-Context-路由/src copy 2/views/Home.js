import React from 'react'
// import styled from 'styled-components';
import {  Route, Link, Switch } from 'react-router-dom'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import ReactRouter from '../router/index'


const Home = ({match}) => {
  console.log(match.url + 'tab1', 'mathc')
  return (
    <div className="home">
     Home
     <nav>
       <Link to="/home/tab1">tab1</Link>
       <Link to="/home/tab2">tab2</Link>
     </nav>
     
      <Route path="/home/tab1" component={Tab1} />
      <Route path="/home/tab2" component={Tab2} />


      
    </div>
  )
}

export default Home