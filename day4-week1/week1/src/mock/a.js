const Mock = require('mockjs')

// var data = Mock.mock({
//   "list|1000": [
//       {
//           "id|+1": 1,
//           "username": '@ctitle',
//           "password": '@word',
//           'age|18-30': 1,
//           "name": '@cname',
//           "sex|1-1": true
//       }
//   ]
// });
const type = ['数据', '人口']
var data = Mock.mock({
  'list|10': [{
    "id|+1": 1,
    "username": '@ctitle',
    'password': '@word',
    'age|18-30': 1,
    'name': '@cname',
    'sex|1-1': true,
    'type|+1': type
  }],
})


console.log(data, 'data')