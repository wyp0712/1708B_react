import * as type from './actionType'
const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {

  if (action.type === type.CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === type.ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))

    newState.list.push(newState.inputValue)
    newState.inputValue = '';
    console.log(newState, 'state')
    return newState;
  }
  
  if (action.type === type.DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  
  if (action.type === type.INIT_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
        console.log(action, 'INIT_INPUT_VALUE')
        
    newState.list = action.data
    newState.inputValue = ''

    return newState
  }
  return state;
}