import React from 'react';
import './App.css';

class App extends React.Component {
  
   constructor(props) {
     super(props)
     this.state = {
        list: [
          {
            num: 2,
            price: 15,
            title: 'vue',
            isCheck: false,
            img: 'https://uimgproxy.suning.cn/uimg1/pcpv/pcpv/iwogh/2019/12/04/21/iwoghBannerPicture/352738605f6141fb9b170d99919ad3cc.png_400w_400h_4e'
          },
          {
            num: 2,
            price: 25,
            title: 'react',
            isCheck: false,
            img: 'https://uimgproxy.suning.cn/uimg1/pcpv/pcpv/iwogh/2019/12/04/21/iwoghBannerPicture/94ba1fbd561f46b79ae8d68a6700137d.png_400w_400h_4e'
          }
        ],
     }
   }

  render() {
    return (
      <div className="App">
        <header>
          购物车
        </header>
        <div className="cart-box">
          {
            this.state.list.map(item => {
              return (
                <div className="goods">
                  <span className="img"> <img src={item.img} /> </span>
                  <span className="title"> {item.title}  {item.price} </span>
                  <span className="remove"> - </span>
                  <span className="num"> {item.num} </span>
                  <span className="add"> + </span>
                </div>
              )
            })
          }
  
        </div>
  
      </div>
    );
  }

}

export default App;
