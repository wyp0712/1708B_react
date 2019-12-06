import React from 'react';
import './App.scss';
import ReactRouter from './router/index'
import { BrowserRouter, Link } from 'react-router-dom'
import FooterBar from './components/FooterBar'
// import Home from './views/Home'
import config from  './router/index'
import RouterView from './router/routerConfig'

// history
class App extends React.Component {
  render() {
    return (
      //  BrowserRouter 只能有一个
      <BrowserRouter>
        <div className="App-page">
            <main className="main">
              
              <RouterView routes={config.routes}></RouterView>   
            </main>
            <FooterBar />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
