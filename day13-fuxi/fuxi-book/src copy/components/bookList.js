import React from 'react'

const BookList = (props) => {
    const { bookData } = props;
    // console.log(bookData, 'bookData')
    return (
      <div className="book-list">
        {
          bookData.map((item, index) => {
            return (
              <ul key={item.id}>
                <li> <img onClick={ () => { props.detailEvent(item) } }  src={item.img} alt=''/> </li>
                <li> {item.name} </li>
                <li> <span onClick={ () => props.addEvent(index) } className="add-btn">+</span> </li>
              </ul>
            )
          })
        }
      </div>
    )
}

export default BookList