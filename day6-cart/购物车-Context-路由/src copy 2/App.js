import React from 'react';
import './App.scss';
import ReactRouter from './router/index'
import { BrowserRouter, Link } from 'react-router-dom'
import FooterBar from './components/FooterBar'
// import Home from './views/Home'
// history
class App extends React.Component {
  render() {
    return (
      //  BrowserRouter 只能有一个
      <BrowserRouter>
       <div className="App-page">
          <header className="header">

          </header>  
          <main className="main">
            <ReactRouter />
          </main>
          <footer className="footer">
            <FooterBar />
          </footer>
       </div>
      </BrowserRouter>
    )
  }
}

export default App;
