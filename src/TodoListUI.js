import React from 'react';
import { Input, Button, List } from 'antd';

// 无状态组件 只定义UI 不做操作
const TodoListUI = (props) => {
  return (
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <Input value={props.inputValue}
        placeholder="list info"
        style={{width: '300px', marginRight: '5px'}}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      <List
        style={{marginTop: '10px', width: '300px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => <List.Item onClick={(index) => {props.handleItemDelete(index)}}>{item}</List.Item>}
      />
    </div>
  )
}

export default TodoListUI;