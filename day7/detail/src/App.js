import React from 'react';
import './App.css';
import axios from 'axios'
import './mock/index'
import RouterView from './router'
import config from './router/config'
import { BrowserRouter } from 'react-router-dom'

// console.log(config, 'config')

axios.get('/api/detail', {
  params: {
    id: 1
  }
}).then(res => {
  console.log(res, 'res')
})

function App() {
  return (
    <div className="App">
       <BrowserRouter> 
          <RouterView routes={config.routes} />
       </BrowserRouter>
    </div>
  );
}

export default App;
