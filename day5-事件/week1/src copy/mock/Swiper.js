let Mock = require("mockjs")
let template = {
  "data|6":[{
    "img":"@image(100x100,@color)"
  }]
}
module.exports = Mock.mock(template)