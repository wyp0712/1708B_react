import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

axios.get('/api/list').then(res => {
  console.log(res, '33')
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
 
      </header>
    </div>
  );
}

export default App;
