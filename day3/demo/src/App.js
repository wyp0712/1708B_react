import React, { Component } from 'react'

const imgs = ['/imgs/1.png', '/imgs/2.png']

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [
        {
          name: 'vue',
          children: [
            {
              title: 'vuex', 
              price: '12'
            },
            {
              title: 'vue-router', 
              price: '22'
            }
          ]
        },
        {
          name: 'react',
          children: [
            {
              title: 'react-redux', 
              price: '12'
            },
            {
              title: 'react-router-dom', 
              price: '22'
            }
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div>
          {
            imgs.map(val => {
              console.log(typeof val)
               return (<img src={val} />)
            })
          }


         {
           this.state.list.map(item => {
             return (
             <div> 
               <h2>{item.name}</h2> 
               <hr />
               { 
                item.children.map(val => {
                  return <h2>{val.title}</h2>
                })
                }
                </div>
             )
           })
         }


        {/* <BrowserRouter>
        </BrowserRouter> */}
      </div>
    )
  }
}

export default App;