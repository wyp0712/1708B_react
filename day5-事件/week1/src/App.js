import React, { Component } from 'react'
import './mock/index'
import axios from 'axios'
const style = {
  width: '200px',
  height: '200px',
  background: 'red'
}
   // class 不会为当前函数绑定this到当前对象  
class App extends Component {
  // 箭头函数共享父级作用域
   render() {
     return <div style={style} onClick={ () => this.handClick(1) }>hello world</div>
   }

   // react合成事件中，当采用属性初始化语法定义函数的时候，调用的时候，如果带上括号 浏览器会预执行这个函数
   // 不传参数的情况下： 直接调用 this.handClick
   // 传参数的情况下：利用箭头函数去调用并且传参数

   // 属性初始化语法
   handClick = (index) => {
     console.log(this)
     console.log(index, 'e')
   }

   componentDidMount() {
      axios.get('/api/list', {
        params: {
          id: 1,
          user: 'devin'
        }
      }).then(res => {
        console.log(res)
      })
      // axios.post('/api/list', {
      //   user: 'devin',
      //   pwd: '123'
      // }).then(res => {
      //   // console.log(res)
      // }) 
   }

}

export default App