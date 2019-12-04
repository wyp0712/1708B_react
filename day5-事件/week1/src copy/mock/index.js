import Mock from 'mockjs' // es6模块化
// const Mock = require('mockjs')
// key=value1&key=value2

// const querystring = require('querystring') // 查询字符串  commonJS 包

// import qs from 'qs'

// qs.parse()
// qs.stringify()


const type = ['数据', '人口']
const data = Mock.mock({
    'list|10': [{
      "id|+1": 1,
      "username": '@ctitle',
      'password': '@word',
      'age|18-30': 1,
      'name': '@cname',
      'sex|1-1': true,
      'type|+1': type
    }]
  })
// console.log(data, 'list')    
// Mock.mock(/\.*/, function(options) {
//   // console.log(querystring.parse(options.url.split('?')[1]), 'options')
//   // console.log(qs.parse(options.url.split('?')[1]), 'options')

//   return data
// })

// Mock.mock('/api/list','post', function(options) {
//   console.log(JSON.parse(options.body), 'options')
//   // return data
// })


