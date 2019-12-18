import Mock from 'mockjs'
import qs from 'qs'


const data = Mock.mock({
  'bookList|20': [
    {
      'img': '@image(100x100, @color, @ctitle)',
      'id': '@id',
      'name': '@cname',
      'isCheck': false
    }
  ],
  'carouselData|5': [
    {
      'img': '@image(375x150, @color, @ctitle)',
      'id': '@id',
    }
  ]
})


// 列表接口
Mock.mock('/api/book', data.bookList)

// 轮播图数据
Mock.mock('/api/carousel', data.carouselData)

// 模糊搜索

Mock.mock(/\api\/search\?\.*/, function(opt) {
  console.log(qs.parse(opt.url.split('?')[1]), 'qs.parse(opt.url')
  const { type } = qs.parse(opt.url.split('?')[1]);
  console.log(type, 'type')
  if(type) {
    return data.bookList.filter((item, index) => {
      return item.name.includes(type)
    })
  } else {
    return []
  }

})

// 详情接口