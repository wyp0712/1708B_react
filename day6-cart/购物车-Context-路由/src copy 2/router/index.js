import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../views/Home'
import Cart from '../views/Cart'
import Tab1 from '../views/Tab1'
import Tab2 from '../views/Tab2'

class ReactRouter extends React.Component {
   render() {
     return (
       <div>
         {/* 路由配置 Switch组件 用来 多个路由 */}
         <Switch>
           <Route path="/cart" component={Cart}></Route>
           <Route  path="/home" component={Home}></Route>
           <Redirect to="/home"/>
         </Switch>
       </div>
     )
   }
}

export default ReactRouter;
