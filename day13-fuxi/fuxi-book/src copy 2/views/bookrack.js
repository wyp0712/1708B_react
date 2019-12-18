import React, { Component } from 'react'
import { connect } from 'react-redux'

 class BookRack extends Component {
  render() {
    return (
      <div>

        { this.props.bookrack.map((item, index) => {
          return <ul key={index}>
            <img src={item.img} alt=''/>
            <li> {item.name} </li>
          </ul>
        }) }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bookrack: state.bookrack
  }
}

export default connect(mapStateToProps, null)(BookRack)
