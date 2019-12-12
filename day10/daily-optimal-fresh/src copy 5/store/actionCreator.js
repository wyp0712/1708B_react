
// 把重复的代码提到一个文件中，自动化测试使用
import axios from 'axios'
import '../mock/index'

export const getInitCartList = (data) => ({
  type: 'init_cart_list',
  data
})

export const getAddCartItem = (index) => ({
  type: 'add_cart_item',
  index
})

export const getRemoveCartItem = (index) => ({
  type: 'remove_cart_item',
  index
})

export const initCartList = () => {
  return (dispatch) => {
    axios.get('/api/list').then(res => {
      let data = res.data;
      const action = getInitCartList(data)
      dispatch(action)
    })
  }
}