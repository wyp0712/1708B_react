import React, { Component } from 'react'
import RouterView from '../router/index'
import { NavLink } from 'react-router-dom'
import qs from 'qs';

export default class componentName extends Component {
  render() {
    return (
      <div>
   
      </div>
    )
  }
  componentDidMount() {
    console.log(qs.parse(this.props.location.search.split('?')[1]), 'props')
  }

}
