import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

// react-redux  是redux的一个中间件 解决的是react和redux连接的问题
class Home extends React.Component {
  render() {
    const {inputValue,list,inputChange, handleBtnEvent, handleDeleteItem } = this.props
    return (
      <div>
        <input value={inputValue}
          onChange={ inputChange }
          />
          <button onClick={ handleBtnEvent}>提交</button>
          {
            list.map((item, index) => {
              return <li onClick={() => handleDeleteItem(index)} key={index}>
                {item.alpha}
              </li>
            })
          }
      </div>
    )
  }

  componentDidMount() {
    const { getAjaxData } = this.props
    getAjaxData()
  }
}

// 属性 获取
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// action 提交
const mapDispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      const target = e.target
      const action = {
        type: 'input_change',
        value: target.value
      }
      dispatch(action)
    },
    handleBtnEvent() {
      const action = {
        type: 'add_input_value',
      }
      dispatch(action)
    },
    handleDeleteItem(index) {
      const action = {
        type: 'remove_input_value',
        index
      }
      dispatch(action)
    },
    getAjaxData() {
      axios.get('/api/car').then(res => {
        const data = res.data;
        const action = {
          type: 'init_data',
          data
        }
        dispatch(action)
      })
    }

  }
}

// connect(mapStateToProps,mapDispatchToProps)(组件) 

export default connect(mapStateToProps, mapDispatchToProps)(Home)
