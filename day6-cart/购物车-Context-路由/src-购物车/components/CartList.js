import React, { Component } from 'react'

class CartList extends Component {

  render() {
    const { list } = this.props
    return (
      <div className="cart-box">
          {
            list.map((item, index) => {
              return (
                <div className="goods" key={index}>
                  <input type="checkbox" 
                   checked={item.isCheck} 
                   onChange={ () => this.handleCheckItemEvent(index)  } 
                  />
                  <span className="img"> <img src={item.img} /> </span>
                  <span className="title"> {item.title}  {item.num} </span>
                  <span className="remove" onClick={ () => this.handleChildRemove(index)}> - </span>
                  <span className="num"> {item.num * item.price} </span>
                  <span className="add" onClick={ () => this.handleChildAdd(index) }> + </span>
                </div>
              )
            })
          }
        </div>
    )
  }

  handleCheckItemEvent = (index) => {
   const { checkItem } = this.props
   checkItem(index)
  }

  handleChildRemove = (index) => {
    console.log(index,'childrend -index')
    const { removeClick } = this.props
    removeClick(index)
  }

  handleChildAdd = (index) => {
    const { addClick } = this.props
    addClick(index)
  }
}

export default CartList;