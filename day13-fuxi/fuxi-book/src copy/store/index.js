import { reducerName } from './reducer'
import { createStore, applyMiddleware } from 'redux'
// 引入redux-thunk 中间件  （redux的）在action中书写异步函数
import thunk from 'redux-thunk'

const store = createStore(
    reducerName
)

export default store