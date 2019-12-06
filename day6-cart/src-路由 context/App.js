import React from 'react';
import './App.scss';
import ReactRouter from './router/index'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import FooterBar from './components/FooterBar'
// history
class App extends React.Component {
  render() {
    return (
      //  BrowserRouter 只能有一个
      <BrowserRouter>
        <ReactRouter />

        <FooterBar />
      </BrowserRouter>
    )
  }
}

export default App;
