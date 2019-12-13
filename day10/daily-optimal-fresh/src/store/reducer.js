
const defultState = {
  inputValue: '',
  list: []
}

export const reducerName = (state = defultState, action) => {
  
  const newState = JSON.parse(JSON.stringify(state))

  if (action.type === 'init_input_value') {
    newState.inputValue = action.value
    return newState;
  }

  if (action.type === 'add_input_value') {
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === 'remove_input_value') {
    newState.list.splice(action.index, 1)
    return newState
  }

  return state;
}