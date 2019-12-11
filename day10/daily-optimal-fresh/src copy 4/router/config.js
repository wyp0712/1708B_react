import Home from '../views/Home.js'
import Cart from '../views/Cart.js'

import Detail from '../views/Detail'
import Login from '../views/Login.js'
// import Mine from '../views/Mine.js'


const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/cart',
    component: Cart,
    requireAuth: true, // 导航守卫字段
  },
  {
    path: '/detail/:id',
    component: Detail,
  },
  {
    path: '/login',
    component: Login
  }
]

export default routes