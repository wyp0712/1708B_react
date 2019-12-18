import React from 'react';

import { BrowserRouter } from 'react-router-dom'
import RouterView from './router/index'
import config from './router/config'

import FooterBar from './components/footerbar'

import { Provider } from 'react-redux'
import store from './store/index'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div className="app">
          <main className='main'>
            <RouterView routes={config}></RouterView> 
          </main> 
          <FooterBar />
        </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
