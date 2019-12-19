import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getInitCartList } from '../store/actionCreator'
import BookList from '../components/bookList'

const IconBox = (props) => {
  return <div className="icon" onClick={ () => { props.history.push('/search') } }>back</div>
}

class BookStore extends Component {
  render() {
    const { cartData } = this.props;
    return (
      <div className="book-store">
        <IconBox {...this.props}></IconBox>
        <BookList
          cartData={cartData}
          detailEvent={ (item) => { this.props.history.push(`/detail/${item.id}`) } }
        />
      </div>
    )
  }

  componentDidMount() {
    const { getBookListData } = this.props;
    getBookListData()
  }
}

const mapStateToProps = (state) => {
  return {
    cartData: state.cartData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBookListData() {
      const action = getInitCartList()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore)
