import Mock from 'mockjs'
import MovieData from './data.json'
console.log(Mock)

Mock.mock('/api/movie', MovieData.movieList)

