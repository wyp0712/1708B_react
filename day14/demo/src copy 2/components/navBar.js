import React, { Component } from 'react'
import Dialog from '../components/dialog'
import { connect } from 'react-redux'
import axios from 'axios'
import { PickerView, WhiteSpace } from 'antd-mobile';
import { province } from './city'
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
    flag: false,
    houseArr: [],
    value: null,
  }

  onChange = (value) => {
    // console.log(value, 'VVVV-----VVVV');
    this.setState({
      value,
    });
  }

  onScrollChange = (value) => {
    // console.log(value, 'VALUE');
    const num1 = Number(value[0]) - 1;
    const num2 = Number(value[1].split('-')[1]) - 1
    const num3 = value[2] && Number(value[2].split('-')[2]) - 1

    console.log(province[num1].label)
    console.log(province[num1].children[num2].label)
    if(num3 !== undefined) {
      console.log(province[num1].children[num2].children[num3].label)
    }

  }

  render() {
    return (
      <div className="app-nav">
        { this.state.flag && <Dialog 
         closeMask={ () => this.bindClose()}
        >
        {
          this.state.tabIndex === 0 && <PickerView
            data={province}
            // value={['02', '02-1', '02-1-1']}
            onChange={this.onChange}
            onScrollChange={this.onScrollChange}
            value={this.state.value}
          />
        }
        {
          this.state.tabIndex !== 0 &&  this.state.houseArr[this.state.tabIndex].map((item, index) => {
            return <span key={index}>{item}</span>
          })
        }

        </Dialog>  }
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
        {/* <div className="nav-more">
          <i className="iconfont">&#xe61c;</i>
        </div> */}
      </div>
    )
  }

  componentDidMount() { 
    axios.get('/api/house').then(res => {
      console.log(res.data, 'res---res')
      this.setState({
        houseArr: res.data
      })
    })
  }

  bindClose = () => {
    this.setState({
      flag: false
    })
  }

  handleClick = (index) => {
    const list = [...this.state.navList];
    list[index].isClick = !list[index].isClick;
    if (list[index].isClick) {
      list.forEach((item, ind) => {
        if (index !== ind) {
          item.isClick = false
        }
      })
      this.setState({
        flag: true
      })
    } else {
      this.setState({
        flag: false
      })
    }
    this.setState({
      tabIndex: index,
      navList: list
    })
  }
}

const mapStateToProps = (state) => {
  return {
    cartData: state.cartData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
