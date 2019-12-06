import React from 'react';
import './App.scss';
import List from './components/List'
import Context from './utils/index'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'hello React'
    }
  }
  render() {
    return (
      <div>
        
        <Context.Provider value={this.state.title}>
          <List />
        </Context.Provider>
      </div>
    )
  }
}

export default App;
