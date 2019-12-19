
import axios from 'axios'
import '../mock/index'

export const initCartData = (data) => ({
  type: 'init_Cart_data',
  data
})

export const getInitCartList = () => {
  return (dispatch) => {
    axios.get('/api/book').then(res => {
      console.log(res.data, 'data----data')
      const data = res.data
      const action = initCartData(data)
      dispatch(action)
    })
  }
}