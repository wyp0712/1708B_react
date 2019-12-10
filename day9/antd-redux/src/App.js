import React, { Fragment } from 'react'
import { List, Input, Button } from 'antd';
import './App.css'
import store from './store/index'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = store.getState()

    store.subscribe(() => this.handleEventerStore())
  }

  render() {
    return (
      <Fragment>
        <div>
          <Input
            value={this.state.inputValue}
            onChange={(e) => { this.handleOnChange(e) }}
            placeholder="large size"
            style={{ width: '300px', margin: '10px' }} />
          <Button onClick={() => this.handleBtnClick()} type="primary"> 确定 </Button>
        </div>
        <div>
          <List
            style={{ width: '300px', marginLeft: '10px' }}
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => {
              return <List.Item onClick={() => this.handleDeleteClick(index)}>{item}</List.Item>
            }}
          />
        </div>
      </Fragment>
    )
  }

  handleEventerStore = () => {
    this.setState(store.getState())
  }

  handleOnChange = (e) => {
    const target = e.target
    const action = {
      type: 'change_value',
      inputValue: target.value
    }
    store.dispatch(action)
  }

  handleBtnClick = () => {
    const action = {
      type: 'input_list',
    }
    store.dispatch(action)
  }

  handleDeleteClick = (index) => {
    const action = {
      type: 'delete_item',
      index
    }
    store.dispatch(action)
  }
}

export default App;



