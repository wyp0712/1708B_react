// import React from 'react'
// import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../views/Home'
import Cart from '../views/Cart'
import Tab1 from '../views/Tab1'
import Tab2 from '../views/Tab2'
import Detail from '../views/Detail'

export default {
  routes: [
    {
      path: '/home',
      component: Home,
      // children: [
      //   {
      //     path: '/home/tab1',
      //     component: Tab1
      //   },
      //   {
      //     path: '/home/tab2',
      //     component: Tab2
      //   }
      // ]
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/detail/:id',
      component: Detail
    }
  ]
}

