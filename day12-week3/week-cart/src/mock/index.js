
import Mock from 'mockjs';
import axios from 'axios'
import qs from 'qs'; // k=v&k1=v1&k2=v2

// JSON.parse() "["{""name":"devin""}"]"  JSON.stringify()

// querystring  CommonJS


const types = [ 'A','B','C','D','E','F','G','H','I','J','K']
const data = Mock.mock({
  'car|12': [
    {
      'alpha|+1': types,
      'children|10-20': [
        {
          'name': '@cname',
          'children|10': [
            {
              'name': '@cname'
            }
          ]
        }
      ]
    }
  ] 
})
// get 接口如果出现多个且有前后台传参数需求，需要通过正则 
// post 接口，不需要正则；
Mock.mock('/api/car',function(opt) {
  return data
})

// 登陆接口

// 详情接口  ?id=1&type=2
Mock.mock(/\/api\/detail\?\.*/, function(opt){
  // const { id } = qs.parse(opt)
})
