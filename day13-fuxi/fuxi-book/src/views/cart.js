import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookRack extends Component {
  state = {
    list: ['确定', '取消']
  }

  render() {
    return (
      <div className="bookrack-page">
        { this.props.goodsList.map((item, index) => {
          return <ul key={index}>
            <li> <img src={item.img} alt=''/> </li> 
            <li>
              <div className="goods-name">{item.name}</div> 
              <div className="cart-btn"> 
                <span> - </span>
                <span>  {item.count}</span>
                <span> +</span>
              </div>
             </li>
          </ul>
        }) }
        <div className="total-btn">  元 </div>  
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    goodsList: state.goodsList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookRack)
