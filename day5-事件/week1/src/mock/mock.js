import Mock from "mockjs"
import MockData from "./mockData.js"
import SwiperData from "./Swiper.js"
Mock.mock("/api/mockData",MockData)
Mock.mock("/api/SwiperData",SwiperData)