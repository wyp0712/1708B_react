import qs from 'qs'
import Mock from 'mockjs'
const type = ['数据', '人口']
const imgs = [
              '/img/1.png', 
              '/img/2.png',
              '/img/3.png',
              '/img/4.png',
              '/img/5.png',
              '/img/6.png',
              '/img/7.png',
              '/img/8.png',
              '/img/9.png',
            ]
var data = Mock.mock({
    'list|10': [
        {
            "id|+1": 1,
            "username": '@ctitle',
            'password': '@word',
            'age|18-30': 1,
            'name': '@cname',
            'sex|1-1': true,
            'type|+1': type,
            'img|+1': imgs
        }
    ]
})
// console.log(data.list, 'data')
// Mock.mock('/api/list', function(options) {
//   return data
// })

Mock.mock(/\.*/, function(options) {
  // console.log(qs.parse(options.url.split('?')[1]), 'options')
  const { id } = qs.parse(options.url.split('?')[1])
  return data.list.filter(val => val.id == id)
})

