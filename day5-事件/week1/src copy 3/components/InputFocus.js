import React from 'react'
import { findDOMNode } from 'react-dom'

/**
 * 
 * @function [项目需求1：实现input框进入页面聚焦效果]
 * @function [需求2:实现点击按钮实现input框失去焦点]
 * 
 * @param {方法：focus() blur()}
 * @param {项目思路：因为方法是原生input上的事件，所以我们需要先获取到原生的dom元素，然后调用方法focus,blur}
 * 
 * @function [1.在dom元素上使用。2.在组件上使用]
 * 
 */

class AutoFocusTextInput extends React.Component {
  render() {
    return (
      <div>
        <input type="text" ref={this.props.inputDom} />
      </div>
    )
  }
}

class InputFocus extends React.Component {
  render() {
    return (
      <div>
        <button onClick={ () => this.handleClickFocus() }>获取</button>
        {/* <input ref={ input => this.inputDom = input } type="text" /> */}
        <AutoFocusTextInput  ref={input => this.inputDom = input} />
      </div>
    )
  }

  componentDidMount() {
    // console.log(this.inputDom.focus(), 'inputDom') 
    console.log(findDOMNode(this))
  }

  handleClickFocus = () => {
    console.log(findDOMNode(this))
    console.log(this.inputDom, 'inputDom')
  }
}

export default InputFocus