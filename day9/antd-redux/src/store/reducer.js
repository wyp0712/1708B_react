const defaultState = {
   inputValue: '',
   list: []
}

export default  (state = defaultState, action) => {

  if (action.type === 'change_value') {
    const newData = JSON.parse(JSON.stringify(state))
    newData.inputValue = action.inputValue
    return newData
  }

  if (action.type === 'input_list') {
    const newData = JSON.parse(JSON.stringify(state))
    newData.list.push(newData.inputValue)
    newData.inputValue = ''
    return newData
  }
  
  if (action.type === 'delete_item') {
    const newData = JSON.parse(JSON.stringify(state))
    newData.list.splice(action.index, 1)
    return newData
  }

  return state
}