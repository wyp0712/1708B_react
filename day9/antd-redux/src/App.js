import React from 'react'
import { Form, Input, Select, Button } from 'antd';
import './App.css'
const { Option } = Select;


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <Input style={{width:'200px',margin:'10px'}}/>
        <Button type="primary"> 确定 </Button>
      </div>
    )
  }
}

export default App;



