import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

const RouterGuard = (props) => {
	const { component: Component, ...otherProps } = props;
	return (
		<Route {...otherProps} render={props => {
			return ( // true: cart组件 false: 
				false ?
					<Component {...props} /> :
					<Redirect to='/selectcar/tab1' />
			)
		}} />
	)
}

const RouteView = (props) => {
	const routes = props.routes.filter(v => v.component)
	const redirect = props.routes.filter(v => v.redirect)
	return (
		<Switch>
			{
				routes.map((val, index) => {
					return <Route key={index} path={val.path} render={props => {
						if (val.requireAuth) {
							return <RouterGuard {...val} {...props}></RouterGuard>
						} else {
							return <val.component routes={val.children} {...props} />
						}
					}} />
				})
			}
      
			{/* { props.match ? <Redirect to={props.redirect} /> : <Redirect to='/home'/>} */}

			{
				redirect.map((val, index) => {
					return <Redirect from={val.path} to={val.redirect} key={index} />
				})
			}
		</Switch>)
}

export default RouteView;






