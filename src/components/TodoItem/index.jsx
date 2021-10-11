import React, { Component } from 'react';
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import './TodoItem.scss';

class TodoItem extends Component {
  render() {
    return (
      <List.Item
        actions={[
          <Tooltip
            title={
              this.props.todo.completed
                ? 'Mark as uncompleted'
                : 'Mark as completed'
            }
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Tooltip>,
          <Popconfirm title="Вы уверены, что хотите удалить задачу?">
            <Button className="remove-todo-button" type="primary" danger>
              X
            </Button>
          </Popconfirm>,
        ]}
        className="list-item"
        key={this.props.todo.id}
      >
        <div className="todo-item">
          <Tag
            color={this.props.todo.completed ? 'cyan' : 'red'}
            className="todo-tag"
          >
            {this.props.todo.title}
          </Tag>
        </div>
      </List.Item>
    );
  }
}
export default TodoItem;
