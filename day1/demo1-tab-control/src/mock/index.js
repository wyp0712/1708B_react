import Mock from 'mockjs'
import MovieData from './data.json'
import todoList from './todoList.json'

Mock.mock('/api/movie', MovieData.movieList)
Mock.mock('/api/todolist', todoList)

// export const STATE = 'hello world';
// export const A = 'hello world';
// export const B = 'hello world';
// export const C = 'hello world';



