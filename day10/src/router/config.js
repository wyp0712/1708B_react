import Home from '../views/Home'
import Cart from '../views/Cart'

import CartTab1 from '../views/carttab1'
import Tab1 from '../views/carttab1-tab'

const routes = [
  {
    path: '/home',
    component: Home,
    isHeader: true,
  },
  {
    path: '/cart',
    component: Cart,
    children: [
      {
        path: '/cart/tab1',
        component: CartTab1,
        children: [
          {
            path: '/cart/tab/show',
            component: Tab1
          }
        ]
      }
    ]
  }
]

export default routes