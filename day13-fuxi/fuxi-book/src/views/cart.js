import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dialog from '../components/dialog'

import { removeCartFn, addCartFn,getDialogMsg } from '../store/actionCreator'

class BookRack extends Component {
  state = {
    msgBtn: ['确定','取消']
  }

  render() {
    const { goodsList, addCart, removeCart,dialogEvent,isShowDialog } = this.props;
    return (
      <div className="bookrack-page">
       <div className="input-check"> <input type="checkbox"/> 计算总价 </div>

       { isShowDialog && <Dialog>
          { this.state.msgBtn.map((item, index) => {
             return <span onClick={ () => { dialogEvent(index) } } key={index}>{item}</span> 
          }) }
        </Dialog> }

        { goodsList.map((item, index) => {
          return <ul key={index}>
            <li> <input type="checkbox" />  </li>
            <li> <img src={item.img} alt=''/> </li> 
            <li>
              <div className="goods-name">{item.name}</div> 
              <div className="cart-btn">
                <span onClick={ () => removeCart(index)}  > - </span>
                <span>  {item.count}</span>
                <span onClick={ () => addCart(index) }> +</span>
              </div>
             </li>
          </ul>
        }) }

        <div className="total-btn"> 
         { this.getTotalPrice() }
        元</div>
      </div>
    )
  }

  getTotalPrice = () => {
    return this.props.goodsList.reduce((n, next) => {
      return n + next.count * next.price
    }, 0)
  }
}

const mapStateToProps = (state) => {
  return {
    goodsList: state.goodsList,
    isShowDialog: state.isShowDialog // 控制dialog是否出现
  }
}
// 反是带action的写到这儿
const mapDispatchToProps = (dispatch) => {
  return {
    addCart(index) {
      const action = addCartFn(index)
      dispatch(action)
    },
    removeCart(index) {
      const action = removeCartFn(index)
      dispatch(action)
    },
    dialogEvent(index) {
      // 0 确定 1 取消
      const action = getDialogMsg(index)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookRack)
