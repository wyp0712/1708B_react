import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export default (props) => {
  console.log(props, 'props------------props')
  return (
    <Switch>
      {
        props.routes.map((item,index) => {
          console.log(item, 'item')
          return (
            <Route path={item.path} component={item.component}></Route>
          )
        })
      }
      <Redirect to='/home'/>
    </Switch>
  )
} 
