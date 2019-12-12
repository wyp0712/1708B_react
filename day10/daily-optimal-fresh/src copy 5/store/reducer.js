/**
 * 
 * @param {数据请求} state 
 * @param {加加} action 
 * @param {减减} action 
 *
 */


const defaultState = { // 数据仓库 必须存在  仓库中默认的值根据业务功能去定义
   list: [],
}

export const reducerName = (state = defaultState, action) => {
  // 拷贝数据  修改数据  返回确定数据 
  const newState = JSON.parse(JSON.stringify(state))

  if (action.type === 'init_cart_list') {
    newState.list = action.data
    return newState
  }
 
  // ++
  if (action.type === 'add_cart_item') {
    newState.list[action.index].count++
    return newState
  }

  if (action.type === 'remove_cart_item') {
    newState.list[action.index].count--
    return newState
  }
  return state;
}