import React, { Component } from 'react'
import store from '../store/index'
import { connect } from 'react-redux'

class Home extends Component {

  constructor(props) {
    super(props)
    // this.state = store.getState() // 拿到store中的数据  
    // this.fn = store.subscribe(() => this.storeEvent()) // 监听store中的数据
  }

  storeEvent = () => {
    // this.setState(store.getState()) // 设置数据
  }

  componentWillUnmount() { // 取消监听
    // this.fn()
  }

  render() {
    const {list, inputValue,handleInputChange,handleBtnClick ,handleDeleteClick } = this.props
    return (
      <div>
        <input
           value={inputValue} 
           onChange={ (e) => handleInputChange(e) } /> 
           <button onClick={ () => handleBtnClick() }>确定</button>
         <ul>
           {
             list.map((item, index) => {
               return <li onClick={ () => handleDeleteClick(index) } key={index}>{item}</li>
             })
           }
          </ul>
      </div>
    )
  }

  // // 把所有原先基于事件的操作都变为action  ajax
  // handleInputChange = (e) => {
  //   const value = e.target.value;
  //   const action = {
  //     type: 'init_input_value',
  //     value
  //   }
  //   store.dispatch(action)
  // }

  // handleBtnClick = () => {
  //   const action = {
  //     type: 'add_input_value',
  //   }
  //   store.dispatch(action)
  // }

  // handleDeleteClick = (index) => {
  //   const action = {
  //     type: 'remove_input_value',
  //     index
  //   }
  //   store.dispatch(action)
  // }
}


const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const value = e.target.value;
      const action = {
        type: 'init_input_value',
        value
      }
      dispatch(action)
    },
    handleBtnClick() {
      const action = {
        type: 'add_input_value',
      }
      dispatch(action)
    },
    handleDeleteClick(index) {
      const action = {
        type: 'remove_input_value',
        index
      }
      dispatch(action)
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
