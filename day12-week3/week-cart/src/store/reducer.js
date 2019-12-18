
const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === 'input_change') {
    newState.inputValue = action.value
    return newState
  }

  if (action.type === 'add_input_value') {
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState;
  }

  if (action.type === 'remove_input_value') {
    newState.list.splice(action.index, 1)
    return newState;
  }

  if (action.type === 'init_data') {
    newState.list = action.data.car
    return newState
  }

  return state;
}