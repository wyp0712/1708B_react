import React, { Component } from 'react'
import RouterView from '../router/index'

// export default class componentName extends Component {
//   render() {
//     return (
//       <div>
//         home
//         { console.log(this.props.routes, 'props--------------------') }
//         <RouterView routes = {this.props.routes}/>
//       </div>
//     )
//   }
// }
export default (props) => {
  return (
    <div>
      home
      { console.log(props.routes, 'props--------------------') }
      <RouterView routes = {props.routes}/>
    </div>
  )
}
