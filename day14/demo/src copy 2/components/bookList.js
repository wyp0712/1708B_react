import React from 'react'

const BookList = (props) => {
    const { cartData, addEvent, detailEvent } = props;
    // console.log(props, 'props')
    return (
      <div className="book-list">
        {
          cartData.map((item, index) => {
            return (
              <ul key={item.id}>
                <li> <img onClick={ () => detailEvent(item)  } src={item.img} alt=''/> </li>
                {/* <li>  </li> */}
                <li>{item.name} <span onClick={ () => { addEvent(item) } } className="add-btn">+</span> </li>
              </ul>
            )
          })
        }
      </div>
    )
}


export default BookList