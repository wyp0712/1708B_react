import Home from '../views/Home'
import Cart from '../views/Cart'
import Detail from '../views/Detail'


export default {
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/detail',
      component: Detail
    }
  ]
}