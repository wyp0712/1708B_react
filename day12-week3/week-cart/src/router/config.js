import Home from '../views/home/index'
import Mine from '../views/mine/index'
import SelectCar from '../views/selectCar/index'

import Tab1 from '../views/selectCar/pages/tab1/tab1'
import Tab2 from '../views/selectCar/pages/tab2/tab2'

import UserCom from '../views/selectCar/pages/tab2/pages/user'
import InfoCom from '../views/selectCar/pages/tab2/pages/info'

const routes = [
  {
    path:"/",
    redirect:"/home",

  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/mine',
    component: Mine,
    requireAuth: true,
  },
  {
    path: '/selectcar',
    component: SelectCar,
    children: [
      {
        redirect: '/selectcar/tab1',
      },
      {
        path: '/selectcar/tab1',
        component: Tab1,
      },
      {
        path: '/selectcar/tab2',
        component: Tab2,
        children: [
          {
            redirect: '/selectcar/tab2/user',
          },
          {
            path: '/selectcar/tab2/user',
            component: UserCom,
          },
          {
            path: '/selectcar/tab2/info',
            component: InfoCom,
          }
        ]
      }
    ]
  }
]

export default routes;