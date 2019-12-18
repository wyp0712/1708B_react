import React, { Component } from 'react'

class BookList extends Component {
  render() {
    const { bookData } = this.props;
    console.log(this.props, 'this.pros===')
    return (
      <div className="book-list">
        {
          bookData.map((item, index) => {
            return (
              <ul key={item.id}>
                <li> <img onClick={ () => { this.props.detailEvent(item) } }  src={item.img} alt=''/> </li>
                <li> {item.name} </li>
              </ul>
            )
          })
        }
      </div>
    )
  }

  handleDetail = (item) => {
    const { detailEvent } = this.props;
    detailEvent(item)
  }

  shouldComponentUpdate(nextProps) {
    return true
  }
}


export default BookList