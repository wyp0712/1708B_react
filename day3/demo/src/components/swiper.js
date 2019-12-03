import React from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import './swiper.scss'

class SwiperComponent extends React.Component {
  render() {
    return (
       <>
        <button onClick={ (e) => this.bindClick(e)}>确定</button> 
        <hr />
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              1
            </div>
            <div className="swiper-slide">
              2
            </div>
            <div className="swiper-slide">
              3
            </div>
          </div> 
        </div>
      </>
    )
  }

  bindClick(e) {
   console.log(e.target)
  }

  componentDidMount() {
    // axios.get().then(res => {
      new Swiper('.swiper-container', {})
    // })
  }


}

export default SwiperComponent