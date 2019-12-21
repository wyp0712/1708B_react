import React, { Component } from 'react'
import Dialog from './dialog'
import { connect } from 'react-redux'
import axios from 'axios'
import { PickerView } from 'antd-mobile';

import { province } from './dataCity'
import BScroll from 'better-scroll'

console.log(province, 'province')


class NavBar extends Component {
  state = {
    navList: [
      {
        name: '区域',
        isClick: false
      },
      {
        name: '价格',
        isClick: false
      },
      {
        name: '房型',
        isClick: false
      },
      {
        name: '更多',
        isClick: false
      },
      {
        name: '排序',
        isClick: false
      }
    ],
    tabIndex: 1,
    flag: false, // 控制dialog
    // houseArr: [],s
    value: null,
    scroll: null,
  }

  render() {
    return (
      <div className="app-nav">
        {
          this.state.flag && <Dialog
           closeMask={ () => this.bindClose() }
          >
           { this.state.tabIndex !== 0 && 
           this.props.houseArr[this.state.tabIndex].map((item, index) => {
             return  <div 
             className='spans'
             onClick={ () => this.props.handleFilterData(item)} 
             key={index}>{item}</div>
           }) }

           { this.state.tabIndex === 0 &&  <PickerView
              data={province}
              value={this.state.value}
              onChange={this.onChange}
              onScrollChange={this.onScrollChange}
            /> }
          </Dialog>
        }
        
        <div className="nav-tag">
          <div className="nav-tag-content">
              {
               this.state.navList.map((item, index) => {
                 return <span key={index}
                  className={ item.isClick ? 'active': '' }
                  onClick={ () => this.handleClick(index)}
                 > {item.name} </span>
               })
              }
          </div>
        </div>
      </div>
    )
  }

  onChange = (value) => {
    // console.log(value);
    // this.setState({
    //   value,
    // });
  }

  onScrollChange = (value) => {
    const num1 = Number(value[0]) - 1
    const num2 = Number(value[1].split('-')[1]) - 1;
    const num3 = value[2] && Number(value[2].split('-')[2]) - 1
  }

  componentDidMount() {
    const { getHouseArr } = this.props;
    getHouseArr()
  }
  
  handleClick = (index) => {

    // 改变下标     // 设置tab切换的下标绑定到全局
    this.setState({
      tabIndex: index
    })

    let list = [...this.state.navList];
    list[index].isClick = !list[index].isClick;

    list.forEach((item, ind) => {
      if (index !== ind) {
        item.isClick = false
      }
    })

    let isDialog = list.some(val => {
       return val.isClick
    })

    if (isDialog) {
      this.setState({
        navList: list,
        flag: true // 蒙层
      }, () => {
       let scroll = new BScroll('.tip', {
          click: true
        })
        this.setState({
          scroll: scroll
        })
      })
    } else {
      this.setState({
        navList: list,
        flag: false
      })
    }
  }


}

const mapStateToProps = (state) => {
  return {
    cartData: state.cartData,
    houseArr: state.houseArr,
    closeFlag: state.closeFlag
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     getHouseArr() {
        axios.get('/api/house').then(res => {
          const data = res.data
          const action = {
            type: 'init_house_data',
            data
          }
          dispatch(action)
        })
     },
     handleFilterData(item) {
       console.log(item)
        const action = {
          type: 'filter_data',
          item
        }
        dispatch(action)

        // const action = {
        //   type: 'close_dialog',
        //   flag: false
        // }
        // dispatch(action)
     },
      // 点击mask关闭弹出框
    bindClose() {
      const action = {
        type: 'close_dialog',
        flag: false
      }
      dispatch(action)
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
