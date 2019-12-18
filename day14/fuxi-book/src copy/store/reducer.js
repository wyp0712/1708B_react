
const defaultState = {
   carouselData: [],
   bookData: [],
   searchVal: '',
   searchList: []
}

export const reducerName = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'init_carousel_data':
     newState.carouselData = action.data;
    return newState;

    case 'init_book_data':
      newState.bookData = action.data;
    return newState;

    case 'init_search_value':
      newState.searchVal = action.value;
      newState.searchList = []
    return newState;

    case 'init_search_list':
      newState.searchList = action.data;
    return newState;

    default:
      return state
  }
}