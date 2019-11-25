const Mock = require('mockjs')
const UserData = []
for(let i = 0; i < 10; i++) {
  // UserData.push({
  //   id: Mock.Random.id(),
  //   title: Mock.Random.title(),
  // })
  UserData.push(Mock.Random.city())
}
console.log(UserData, 'UserData')
// module.exports = {
//   UserData
// }
// import Mock from 'mockjs'
Mock.mock('/api/todolist', UserData)

// module.exports = {
//   UserData
// }