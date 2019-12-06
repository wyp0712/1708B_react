import React from 'react';
import './App.scss';
import Dialog from './components/Dialog'
import HeaderBar from './components/Header'
import CartList from './components/CartList'
import TotalPrice from './components/TotalPrice'
import Checked from './components/Checked'

class App extends React.Component {
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
        },
        {
          num: 2,
          price: 15,
          title: 'vue',
          isCheck: false,
          img: 'https://uimgproxy.suning.cn/uimg1/pcpv/pcpv/iwogh/2019/12/04/21/iwoghBannerPicture/352738605f6141fb9b170d99919ad3cc.png_400w_400h_4e'
        }
      ],
      isDialog: false,   // 弹出框显示控制
      removeIndex: '',   // 删除数据下标控制
      isCheckAll: false // 全选按钮控制
    }
  }

  render() {
    const  { list, isCheckAll, isDialog } = this.state
    return (
      <div className="App">
        <Checked />
         { isDialog && <Dialog>
           <h1>我是dialog组件</h1>
           <span className="sure" onClick={ () => this.handDialogSure() }>确定</span>  
           <span className="close" onClick={ () => this.handDialogClose() } >取消</span>  
        </Dialog> }

        {/* <HeaderBar 
         checkAllEvent = { (isCheck) => this.handleCheckAllEvent(isCheck) }
         isCheckAll={isCheckAll}
        /> */}

        {/* <CartList
         {...this.state}
         list={list}
         checkItem={ (index) => this.handleCheckItemEvent(index)  }
         removeClick={ (index) => this.handleRemove(index) } 
         addClick= { (index) => this.handleAdd(index) }
        /> */}

        {/* <TotalPrice 
         total = { () => this.handleTotalPrice() }
        /> */}
      </div>
    );
  }

  handleTotalPrice  = () => {
    const list = [...this.state.list]
    let goods = list.filter(val => val.isCheck)
    return goods.reduce((num, item) => {
       return num + item.num * item.price
    }, 0)
  }

  handleCheckAllEvent = (isCheck) => {
    console.log(isCheck, 'isCheck')
    const list = [...this.state.list]
    list.forEach(item => {
      item.isCheck = isCheck
    })
    this.setState({
      isCheckAll: isCheck
    })
  }
  
  // 每次点击的单选事件
  handleCheckItemEvent = (index) => {
    console.log(index)
    const list = [...this.state.list]
    list[index].isCheck = !list[index].isCheck

    let totalCheck = list.every(val => {
      return val.isCheck
    })

    this.setState({
      list: list,
      isCheckAll: totalCheck
    })
  }

  // 弹框确认关闭 
  handDialogSure = () => {
    const list = [...this.state.list]
    let flag = list.some(val => val.isCheck)
    flag ? list.splice(this.state.removeIndex, 1) : alert('请选中再删除数据')

    this.setState(() => ({
      isDialog: false,
      list: list,
    }), () => {
      if (!list.length) {
        this.setState(() => ({
          isCheckAll: false
         }))
      }
    })
  }

  // 弹框确认取消
  handDialogClose = () => {
    this.setState({
      isDialog: false
    })
  }
  
  // --函数
  handleRemove = (index) => {
    const list = [...this.state.list]
    if (list[index].num<=1) {
      this.setState({
        isDialog: true
      })
      return
    } else {

      list[index].num--
      this.setState({
        list: list,
        removeIndex: index
      })
    }
    console.log(list.length, 'listg')
    
  }

  // ++ 函数
  handleAdd = (index) => {
    const list = [...this.state.list]
    list[index].num++
    this.setState({
      list: list
    })
  }
}

export default App;
