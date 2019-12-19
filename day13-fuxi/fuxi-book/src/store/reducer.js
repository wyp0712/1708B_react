const defaultState = {
  cartData: [], // 总的数据
  goodsList: []
}

export const reducerName = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'init_Cart_data') {
    newState.cartData = action.data;
    return newState;
  }
  return state
}