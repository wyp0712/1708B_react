let Mock = require("mockjs")
let template = [
  {
    "data|20": [{
      "title":"@title",
      "img":"@image(100x100,@color)"
    }]
  },
  {
    "data|40": [{
      "title":"@title",
      "img":"@image(100x100,@color)"
    }]
  },
  {
    "data|6": [{
      "title":"@title",
      "img":"@image(100x100,@color)"
    }]
  },
  {
    "data|2": [{
      "title":"@title",
      "img":"@image(100x100,@color)"
    }]
  }
]

module.exports = Mock.mock(template)