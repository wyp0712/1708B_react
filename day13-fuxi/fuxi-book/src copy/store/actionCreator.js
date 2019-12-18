/* 用来生成action的js文件 */
import axios from 'axios'
import '../mock/index'

export const getAddEvent = (index) => ({
  type: 'add_cart',
  index
})

export const initCartList = (data) => ({
  type: 'init_cart_list',
  data
})

// redux-thunk 就可以在action书写函数
export const getInitCartList = () => {
  return (dispatch) => {
    axios.get('/api/book').then(res => {
      const data = res.data;
      const action = initCartList(data)
      dispatch(action)
    })
    // fetch('/api/book').then(res => {}).then(res => {
    //   console.log(res, 'res')
    // })
  }
}