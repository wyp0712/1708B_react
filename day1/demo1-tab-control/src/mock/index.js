import Mock from 'mockjs'
import MovieData from './data.json'
import todoList from './todoList.json'

Mock.mock('/api/movie', MovieData.movieList)
Mock.mock('/api/todolist', todoList)



