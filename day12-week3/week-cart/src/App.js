import React from 'react';
import './App.scss';
import './mock/index'

import { BrowserRouter,HashRouter } from 'react-router-dom'
import RouteView from './router/index'
import config from './router/config'

import { Provider, connect } from 'react-redux' // 提供者
import store from './store/index'
// console.log(connect, 'Provider')

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <RouteView routes={config}></RouteView>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
