import React, { Component } from 'react'


class TodoItem extends Component {
  render() {
    return (
      <li
       onClick={this.handleClick.bind(this)} 
       > {this.props.item} </li>
    )
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index)
  }
}

export default TodoItem;