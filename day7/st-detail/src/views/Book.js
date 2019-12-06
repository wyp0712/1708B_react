import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'

axios.get('/api/search', {
  params: {
    type: '明'
  }
}).then(res => {
  console.log(res, 'res----book')
})

export default class componentName extends Component {
  static propTypes = {

  }

  render() {
    
    return (
      <div>
         book
      </div>
    )
  }
  UNSAFE_componentWillMount() {
    console.log('componentDidMount,-------will')
  }
  componentDidMount() {
    console.log('componentDidMount-----Book')
  }
}
