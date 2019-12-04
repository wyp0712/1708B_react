import React, { Component, Fragment } from 'react'
import {findDOMNode}  from 'react-dom'
import Dialog from './components/Dialog'
import InputFocus from './components/InputFocus'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          num: 0,
          price: '15',
          title: 'vue'
        },
        {
          num: 0,
          price: '25',
          title: 'react'
        }
      ],
      isMask: false
    }
  }

  render() {
    return (
      <Fragment>
        <InputFocus />
        <div className="list">
        { this.state.isMask ?  <Dialog ><h1 onClick={ () => this.closeMask()}>我是弹框</h1></Dialog> : "" }
           {
             this.state.list.map((item, index) => {
              return (
                <Fragment key={index}>
                  <span className="goods"> {item.price* item.num} {item.title} </span>
                  <span className="cart">
                    <span className="remove" onClick={() => this.handleRemove(index)}>-</span>
                    <span> {item.num} </span>
                    <span className="add" onClick={() => this.handleAdd(index)}>+</span>
                  </span>
                  <hr />
                </Fragment>
              )
             })
           }
        </div>
      </Fragment>
    )
  }

  closeMask = () => {
    this.setState({
      isMask: false
    })
  }

  handleRemove = (index) => {
    const list = [...this.state.list]
    list[index].num--
    this.setState(() => ({
      list: list,
      isMask: true
    }))
  }

  handleAdd = (index) => {
    const list = [...this.state.list]
    list[index].num++
    this.setState(() => ({
      list: list
    }))
  }

  // 
  componentDidMount() {
    
  }
}

export default App