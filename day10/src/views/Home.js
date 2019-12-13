import React, { Component, Fragment } from 'react'
import axios from 'axios'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      city: []
    }
  }

  render() {
    return (
      <Fragment>
        <div className="box">
          { this.state.city.map((item, index) => {
            return(
              <Fragment key={index}>
                {/* <h1 id={item.alpha.toUpperCase()}>
                  {item.alpha.toUpperCase()}
                </h1> */}
                <h1 id={item.alpha.toUpperCase()} className='alpha' ref={ h1 => this.h1Dom = h1  } >
                  {item.alpha.toUpperCase()}
                </h1>
                <div>
                { item.city.map((val, index)=> {
                    return <div onClick={ () => this.props.history.push('/cart?city='+ val.city) } key={index}>{val.city}</div> 
                  }) }
                </div>
              </Fragment>
            )
          }) }
        </div>
        <div className="right">
         { this.state.city.map((item, index) => {
            return(
              <Fragment key={index}>
                {/* <a href={'#'+ item.alpha.toUpperCase()} onClick={() => this.handleFloor(index)} className="alpha">
                  {item.alpha.toUpperCase()}
                </a> */}
                <a onClick={(e) => this.handleFloor(e,index)} className="alpha">
                  {item.alpha.toUpperCase()}
                </a>
              </Fragment>
            )
          }) }
        </div>
      </Fragment>
    )
  }

  handleFloor = (e,index) => {
    console.log(index)
    // console.log(e.target.innerHTML, 'h1Dom')
    // console.log(document.querySelectorAll('.alphas')[index].offsetTop + 'px')
    const main = document.querySelector('.main');
    main.scrollTop = document.querySelectorAll('.alpha')[index].offsetTop
    // main.addEventListener('scroll', () => {
     
    // })


    
    //console.log(document.querySelectorAll('.alpha')[index].offsetTop)
  }

  componentDidMount() {


    
    axios.get('/api/list').then(res => {
      console.log(res.data.city, 'res')
      this.setState({
        city: res.data.city
      })
    })
  }
}
