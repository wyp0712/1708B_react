import React from 'react'
import { Input, Button, List } from 'antd';

// UI组件 只有render函数的，可以抽离为ui组件
const TodoListUi = (props) => {
  return (
    <div style={{ margin: '20px' }}>
      <Input
        value={props.inputValue}
        placeholder="todo info"
        style={{ width: '300px', border: '1px solid black', marginRight: "20px" }}
        onChange={props.bindInputChange}
      />

      <Button
        type="primary"
        onClick={props.bindBtnClick}
      > 确定 </Button>

      <List style={{ width: '300px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => <List.Item onClick={ (index) => { props.bindDeleteItem(index) } }>{item}</List.Item>}
      />
    </div>
  )
}

export default TodoListUi;