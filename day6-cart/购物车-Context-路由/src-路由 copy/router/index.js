import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import Cart from '../views/Cart'

class ReactRouter extends React.Component {
   render() {
     return (
       <div>
         {/* 路由配置 Switch组件 用来 多个路由 */}
         <Switch>
           <Route exact path="/" component={Home}></Route>
           <Route path="/cart" component={Cart}></Route>
         </Switch>
       </div>
     )
   }
}

export default ReactRouter;
