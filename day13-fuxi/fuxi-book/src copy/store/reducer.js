const defaultState = {
   carouselData: [], // 
   bookData: [], // 总的数据
   searchVal: '', // 
   searchList: [], // 搜索数据
   detailData: [],  // 详情数据
   bookrack: [], // 只要加入书架的数据都是true

   cartList: [], // 购物车数据
   totalCartData: [] // 总的购物车数据
}

export const reducerName = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  if (action.type === 'init_cart_list') {
    newState.totalCartData = action.data;
    console.log(newState, 'action')
    return newState;
  }
  
  // 加入购物车逻辑，首页加入
  if (action.type === 'to_cart') {
    //  newState.cartList.push()
    const goods = newState.cartList.find(val => val.id === action.item.id);
    if (goods) {
      goods.count ++;
    } else {
      newState.cartList.push(action.item)
    }
    return newState;
  }
  
  // 购物车页面中的加加逻辑
  if (action.type === 'add_cart') {
    newState.cartList[action.index].count++;
    return newState;
 }

  // 购物车页面的--
  if (action.type === 'remove_cart') {
     newState.cartList[action.index].count--;
     return newState;
  }

  // switch (action.type) {
  //   case 'init_carousel_data':
  //    newState.carouselData = action.data;
  //   return newState;

  //   case 'init_cart_list':
  //     newState.bookData = action.data;
  //   return newState;

  //   case 'init_search_value':
  //     newState.searchVal = action.value;
  //     newState.searchList = []
  //   return newState;

  //   case 'init_search_list': // 
  //     newState.searchList = action.data;

  //     newState.bookrack.forEach(item => {
  //       newState.searchList.forEach(val => {
  //         if (item.id === val.id) {
  //           val.isCheck = item.isCheck
  //         }
  //       })
  //     })
  //   return newState;

  //   case 'detail_data': // 
  //     newState.detailData = action.detailData
  //     newState.bookrack.forEach(item => {
  //       newState.detailData.forEach(val => {
  //         if (item.id === val.id) {
  //           val.isCheck = item.isCheck
  //         }
  //       })
  //     })
  //   return newState;

  //   case 'add_detail':
  //     newState.detailData[0].isCheck = action.flag;
  //     newState.bookrack.push(newState.detailData[0])
  //   return newState;

  //   case 'add_search':
  //     newState.searchList.forEach((val) => {
  //       if(val.id === action.item.id) {
  //         val.isCheck = true
  //         newState.bookrack.push(val)
  //       }
  //     })
  //   return newState;

  //   default:
  //     return state
  // }
}