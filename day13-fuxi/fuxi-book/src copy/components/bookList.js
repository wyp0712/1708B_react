import React, { Component } from 'react'

export default class BookList extends Component {
  render() {
    const { bookData } = this.props;
    return (
      <div className="book-list">
        {
          bookData.map((item, index) => {
            return (
              <ul key={item.id}>
                <li> <img src={item.img} alt=''/> </li>
                <li> {item.name} </li>
              </ul>
            )
          })
        }
      </div>
    )
  }

  shouldComponentUpdate(nextProps) {
    return true
  }
}
