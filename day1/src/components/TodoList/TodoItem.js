import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return true
    }
  }

  render() {
    console.log('render2')
    const { content,test } = this.props
    return (
      <div onClick = {this.handleClick} >
        { test } -> { content }
        {/* {this.props.content} */}
      </div>
    )
    // return React.createElement('li', {id: 'box', className: 'box'}, React.createElement('span', {}))
  }
  handleClick() {
    // this.props.deteleItem(this.props.index)
    const { deteleItem, index } = this.props;
    deteleItem(index)
  }

  /**
   * 一个组件要从父组件接收参数
   * 如果这个组件第一次存在于父组件中，不会执行
   * 如果这个组件之前已经存在于父组件中，才会执行
   */
  componentWillReceiveProps() {
    console.log('子组件- componentWillReceiveProps')
  }

  componentWillUnmount() {
    console.log('child componentWillUnmount')
  }
}

// 数据验证
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  // content: PropTypes.arrayOf(PropTypes.number, PropTypes.string),
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deteleItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello world-react'
}

export default TodoItem