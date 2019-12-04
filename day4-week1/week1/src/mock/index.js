import Mock from 'mockjs'
import tabData from './data.json'
// import querystring from 'querstring'
// const querystring = require('querystring')
import qs from 'qs'

Mock.mock('/api/tab', 'post', function(options) {
  console.log(JSON.parse(options.body))
})

Mock.mock(/\/api\/list\.*/, function(res){
  // console.log(res.url.split('?')[1])
  console.log(qs.parse(res.url.split('?')[1]), 'res')
})

Mock.mock('/api/tab', tabData)


