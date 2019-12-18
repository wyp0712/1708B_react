import React, { Component } from 'react'
import SwiperComponent from '../components/swiper'
import BookList from '../components/bookList'
import { connect } from 'react-redux'
import { getAddEvent, initCartList, getInitCartList } from '../store/actionCreator'

import axios from 'axios'
import '../mock/index'

const IconBox = (props) => {
  return <div className="icon" onClick={ () => { props.history.push('/search') } }>back</div>
}

class BookStore extends Component {
  render() {
    const {bookData, totalCartData } = this.props
    // console.log(totalCartData, 'totalCartData')
    return (
      <div className="book-store">
        <IconBox {...this.props}></IconBox>
        {/* <SwiperComponent />  */}
        <BookList
          bookData={bookData}
          detailEvent={ (item) => { this.props.history.push(`/detail/${item.id}`) } }
          addEvent={ (index) =>  this.handleAddCartEvent(index) }
        />
      </div>
    )
  }

  componentDidMount() {
    // 请求数据函数
    const { getBookListData } = this.props;
    console.log(getBookListData, 'getBookListData')
    getBookListData()
  }
}

const mapStateToProps = (state) => {
  console.log(state && state.totalCartData, 'state')
  return {
    // totalCartData: state.totalCartData
    bookData: state.bookData
    // totalCartData: state.totalCartData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBookListData() {
      // 获取首页数据
      axios.get('/api/book').then(res => {
        const data = res.data;
        const action = {
          type: 'init_cart_list',
          data
        }
        // const action = initCartList(data)
        dispatch(action)
      })
    },
    handleAddCartEvent(index) {
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore)
