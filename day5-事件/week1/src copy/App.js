import React, { Component, Fragment } from 'react'
import './mock/index'
import axios from 'axios'
import './mock/mock'
import {findDOMNode}  from 'react-dom'

const style = {
  width: '200px',
  height: '200px',
  background: 'red'
}

class AutoFocusTextInput extends Component {
  render() {
    return (
      <div>
        <input type="text" ref={ input => this.textInput = input } /> 
      </div>
    )
  }

  blur() {
    this.textInput.blur()
  }

  componentDidMount() {
    this.textInput.focus()
  }
}

function Children(props) {
  return <nav className="nav"></nav>
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
   render() {
     return (
       <Fragment>
         <Children  />
         {/* <div style={style} ref="navDom" onClick={ () => this.handClick() }>{this.state.count}</div> */}
         {/* <input type="text" ref='inputDom' /> */}
         {/* <input type="text" ref={(input) => this.textinput = input} /> */}
         {/* <AutoFocusTextInput ref={ (input) => {this.inputInstance = input} } /> */}
         {/* <Children inputRef={ (input) => {this.inputInstance = input} } /> */}
       </Fragment>
     )
   }

   handClick = () => {
     console.log(findDOMNode(this), 'this')
     //  console.log(this.nav)
     //  console.log(this.inputInstance.focus())
     //  console.log(this.refs.inputDom.focus())  
     //  console.log(this.textinput.focus()) 
   }

   componentDidMount() {
    console.log(findDOMNode(this), 'this')
    const navDom = findDOMNode(this)
    window.addEventListener('scroll',() => {
      console.log(document.documentElement.scrollTop)
    })

    axios.get('/api/mockData').then(res => {
      // console.log(res.data[0].data)
    })
   }
}

export default App