import React, { Component } from 'react'
import RouterView from '../../router/index'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class SelectorCar extends Component {
  render() {
    return (
      <div className="car-box">
        <button onClick={this.showMask}>确定</button>
        <div className="dialog">
          <div className="mask"></div>
          <div className="tip">
            <button onClick={this.hideMask}>确定</button>

            <RouterView {...this.props} redirect='/selectcar/tab1'  routes={this.props.routes}></RouterView>
          </div>
        </div>
      </div>
    )
  }

  showMask = () => {
    const dialog = document.querySelector('.dialog')
    const tip = document.querySelector('.tip')
    dialog.style.display = 'block'
    setTimeout(() => {
      tip.style.right = `0`
    }, 500);
  }

  hideMask = () => {
    const dialog = document.querySelector('.dialog')
    const tip = document.querySelector('.tip')
    tip.style.right = `-50%`
    setTimeout(() => {
      dialog.style.display = 'none'
    }, 500);
  }
  
  componentDidMount() {
   
  }
}

const mapStaetToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStaetToProps, mapDispatchToProps)(SelectorCar)
