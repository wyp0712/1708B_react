import React, { Component,Fragment } from 'react'
import RouterView from '../router/index'
import { Link } from 'react-router-dom'
import store from '../store/index'
import data from '../mock/data.json'
console.log(data.movieList, 'data====data')

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = store.getState()
    store.subscribe(() => this.bindStoreEvent())
  }

  render() {
    return (
      <div>
        {console.log(this.state, 'state')}
        {
          this.state.list.map(item => {
            return (
              <div key={item.id}>
                <div>
                  <img src={item.img} onClick={ () => { this.handleClick(item) } } alt=""/>
                </div> 
                <div>
                {item.nm}
                </div>
              </div>
            )
          })
        }
       {/* <Link to="/home/tab1">tab1页面</Link> |
       <Link to="/home/tab2">tab2页面</Link>  <br/> 

       <RouterView routes={this.props.routes}/> */}
      </div>
    )
  }
  handleClick = (item) => {
    console.log(item, 'item')
    const action = {
      type: 'add_cart_item',
      item
    }
    store.dispatch(action)
  }

  componentDidMount() {
    const movieData = data.movieList
    const action = {
      type: 'init_movie_list',
      movieData
    }
    store.dispatch(action)
  }

  bindStoreEvent = () => {
    this.setState(store.getState())
  }
}

