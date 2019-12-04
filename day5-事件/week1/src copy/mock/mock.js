import Mock from "mockjs"
import MockData from "./mockData.js"
import SwiperData from "./Swiper.js"
console.log(MockData[0].data, 'MockData')
Mock.mock("/api/mockData",MockData)
Mock.mock("/api/SwiperData",SwiperData)