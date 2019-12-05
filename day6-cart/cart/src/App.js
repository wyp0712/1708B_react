import React, { Component, Fragment } from 'react'
import Dialog from './components/Dialog'
import ShopCart from './components/Cart'
import { BrowserRouter } from 'react-router-dom'
class NavItem extends Component {
  render() {
    const { checkAll } = this.props
    return (
        <nav className="nav">
          <input type="checkbox" checked={checkAll} onChange={ () => this.handleChangeCheckAll() } /> 
        </nav>
      )
  }

  handleChangeCheckAll = () => {
    const { checkAllEvent, checkAll } = this.props
    let flag = checkAll;
    flag = !flag
    checkAllEvent(flag)
  }
}

const ToTalPrice = (props) => {
  return <div>{props.price()}</div>
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          num: 2,
          price: 15,
          title: 'vue',
          isCheck: false,
          img: 'https://uimgproxy.suning.cn/uimg1/pcpv/pcpv/iwogh/2019/12/04/21/iwoghBannerPicture/352738605f6141fb9b170d99919ad3cc.png_400w_400h_4e'
        },
        {
          num: 2,
          price: 25,
          title: 'react',
          isCheck: false,
          img: 'https://uimgproxy.suning.cn/uimg1/pcpv/pcpv/iwogh/2019/12/04/21/iwoghBannerPicture/94ba1fbd561f46b79ae8d68a6700137d.png_400w_400h_4e'
        }
      ],
      isMask: false,
      checkAll: false,
      sureOrClose: '',
      removeIndex: ''
    }
  }
  render() {
    return (
      <div className="box">

        <NavItem
          checkAll={this.state.checkAll}
          checkAllEvent={(state) => this.bindCheckAllEvent(state)}
        />
        {/* <InputAutoFocus /> */}
        <ShopCart
          list={this.state.list}
          checkItemEvent={ (index) => this.handleCheckItem(index)}
          removeClick={(index) => this.handleRemove(index)}
          addClick={(index) => this.handleAdd(index)}
        />
        <ToTalPrice
         price={() => this.totalPrice()} 
        />
        { this.state.isMask ?  <Dialog >
            <h1 onClick={ () => this.closeMask()}>我是弹框</h1>
            <span className="sure" onClick={ () => this.handleDialogSure() }>确定</span>
            <span className="close" onClick={ () => this.handleDialogClose() }>取消</span>
          </Dialog> : "" }
      </div>
    )
  }

  handleDialogSure = () => {
    // this.setState({
    //   sureOrClose: true,
    //   isMask: false
    // })
    const list = [...this.state.list]
    this.setState(() => ({
      sureOrClose: true,
      isMask: false
    }), () => {
      // if (this.state.sureOrClose) {
        console.log('删除数据')
        let removeFlag = list.some((val, ind) => val.isCheck )
        console.log(removeFlag, 'removeFlag')
        removeFlag ? list.splice(this.state.removeIndex, 1) : alert('请选中再删除')
        this.setState({
          list: list,
        })
        !list.length && this.setState({checkAll: false})
      // }
    })

    // console.log(this.state.sureOrClose, 'sureOrClose')
  }

  handleDialogClose = () => {
    this.setState({
      sureOrClose: true,
      isMask: false
    })
  }

  handleCheckItem = (index) => {
    const list = [...this.state.list]
    list[index].isCheck = !list[index].isCheck
    let flag = list.every(val => {
      return val.isCheck
    })
    this.setState({
      list: list,
      checkAll: flag
    })
  }

  bindCheckAllEvent = (state)  => {
    // console.log(state, 'state---------state')
    const list = [...this.state.list]
    list.forEach(item => {
      item.isCheck = state
    })
    this.setState({
      list: list,
      checkAll: state
    })
  }

  // total
  totalPrice = () => {
    const list = [...this.state.list]
    let b = list.filter(val => val.isCheck)
    return b.reduce((total, item) => {
      return total + item.price * item.num
    }, 0)
  }

  closeMask = () => {

  }

  handleRemove = (index) => {
    const list = [...this.state.list]
    if (list[index].num <=1) {
      this.setState(() => ({
        isMask: true
      }))
      return;
    } else {
      list[index].num--
      this.setState(() => ({
        list: list,
        removeIndex: index
      }))
    }
    this.totalPrice()
  }

  handleAdd = (index) => {
    const list = [...this.state.list]
    list[index].num++
    this.setState(() => ({
      list: list
    }))

    this.totalPrice()
  }

  // 
  componentDidMount() {
    // console.log(findDOMNode(this)) // 
    window.addEventListener('scroll', () => {
      console.log(document.documentElement.scrollTop)
    }) 
  }
}

export default App