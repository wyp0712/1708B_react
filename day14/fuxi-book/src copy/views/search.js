import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import '../mock/index'

const BackBox = (props) => {
  return <div className="icon" onClick={ () => { props.history.go(-1) } }>icon</div>
}

class SearchPage extends Component {
  render() {
    const { searchVal, inputChange, searchList } = this.props
    return (
      <div className="search-page">
        <BackBox {...this.props}/>
        <input
         value={searchVal}
         onChange={inputChange}
        />
        <ul>
          { searchList.map(item => {
            return <li key={item.id}>{item.name}</li>
          }) }
        </ul>
      </div>
    )
  }
}

// combineruducer
const mapStateToProps = (state) => {
  return {
    searchVal: state.searchVal,
    searchList: state.searchList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      const value = e.target.value;
      const action = {
        type: 'init_search_value',
        value
      }
      dispatch(action)
      if(value) {
        axios.get('/api/search',{
          params: {
            type: value
          }
        }).then(res => {
          const data = res.data
          const action = {
            type: 'init_search_list',
            data
          }
          dispatch(action)
        })
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)