import * as type from './actionType'
import axios from 'axios'
import '../mock/index'

export const getInputChangeAction = (value) => ({
  type: type.CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = (value) => ({
  type: type.ADD_TODO_ITEM,
  value
})

export const getDeleteItemAction = (value) => ({
  type: type.DELETE_TODO_ITEM,
  value
})

export const getInitItemAction = (data) => ({
  type: type.INIT_INPUT_VALUE,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/api/todolist')
    .then(res => {
      let data = res.data
      const action = getInitItemAction(data)
      setTimeout(() => {
        dispatch(action)
      }, 3000)
    }) 
  }
}