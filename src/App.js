import React, { Component } from 'react'
// import AntTodoList from './AntdTodoList/index.js'
import { Provider } from 'react-redux'
import TodoListRedux from './todoList-react-redux/index'

// const dataArr = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];

class App extends Component {
  render() {
   return ( 
      <div>
         <Provider>
           <TodoListRedux /> 
         </Provider>
        {/* <AntTodoList data={dataArr}/> */}
      </div>
    )
  }
}

export default App;

