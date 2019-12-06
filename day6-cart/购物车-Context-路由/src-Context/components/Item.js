import React from 'react'
import Context from '../utils/index'

class Item extends React.Component {
  render() {
    return <div>
       <Context.Consumer>
         {
           (value) => {
             console.log(value, '我是父组件传过来的值')
             return <h1> {value} </h1>
           }
         }
       </Context.Consumer>
    </div>
  }
}

export default Item