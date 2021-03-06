import React from 'react'

const BookList = (props) => {
    const { cartData, addEvent, detailEvent } = props;
    console.log(props, 'props')
    return (
      <div className="book-list">
        {
          cartData.map((item, index) => {
            return (
              <ul key={item.id}>
                <li> <img onClick={ () => detailEvent(item)  } src={item.img} alt=''/> </li>
                <li> {item.name} </li>
                <li> <span onClick={ () => { addEvent(item) } } className="add-btn">+</span> </li>
              </ul>
            )
          })
        }
      </div>
    )
}


export default BookList