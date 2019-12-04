import React, { Component, Fragment } from 'react'
import {findDOMNode}  from 'react-dom'
import Dialog from './components/Dialog'

class AutoFocus extends Component {
  render() {
    return (
      <div>
        <input type="text" ref={this.props.inputRef}  />
      </div>
    )
  }
}

// const AutoFocus = () => {
//   return <div>
//       <input type="text" ref={this.props.inputRef}  />
//     </div>
// }

// const AutoFocus = (props) => {
//   return <div>
//       <input type="text" ref={props.inputRef}  />
//     </div>
// }

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
      isMask: true
    }
  }

  render() {
    return (
      <Fragment>
        <div className="list">
          {/* <AutoFocus inputRef={ el => this.inputElement = el }/> */}
          {/* <AutoFocus inputRef={ el => this.inputElement = el }/> */}
          <AutoFocus ref={ input => this.inputElement = input }/>
          

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

  handleClick = () => {

    console.log(this.inputInstance.blur(), 'inputInstance')
  }

  handleRemove = (index) => {
    const list = [...this.state.list]
    list[index].num--
    this.setState(() => ({
      list: list,
      isMask: this.state.isMask = !this.state.isMask
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
    console.log(this.inputElement, 'inputElement  ')
    // console.log(this.inputInstance)
    // console.log(this.inputDom.focus())
    // console.log(this.inputInstance)
    // console.log(this.refs.inputDom.focus())
  }
}

export default App