import React, { Component } from 'react';
import { Tooltip, Tag, List, Modal, Button, Popconfirm, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import './TodoItem.scss';

class TodoItem extends Component {
  render() {
    const { todo, onTodoRemove } = this.props;

    return (
      <List.Item
        actions={[
          <Tooltip
          // title={
          //   this.props.todo.completed
          //     ? 'Mark as uncompleted'
          //     : 'Mark as completed'
          // }
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              // onChange={() => onTodoToggle(todo)}
              // defaultChecked={todo.completed}
            />
          </Tooltip>,
          <Popconfirm
            title="Вы уверены, что хотите удалить задачу?"
            onConfirm={() => {
              onTodoRemove(todo);
            }}
          >
            <Button className="remove-todo-button" type="primary" danger>
              X
            </Button>
          </Popconfirm>,
        ]}
        className="list-item"
        key={todo.id}
      >
        <div className="todo-item">
          <Button
            type="primary"
            onClick={this.props.showModal}
            className="todo-tag"
            danger={todo.completed ? false : true}
          >
            {todo.title}
          </Button>

          <Modal
            title={
              <>
                <h3>{todo.title}</h3>{' '}
                <span className="modal-date">{todo.date}</span>
              </>
            }
            visible={this.props.isModalVisible}
            onOk={this.props.handleOk}
            onCancel={this.props.handleCancel}
            footer={null}
          >
            <p>{todo.description}</p>
          </Modal>
        </div>
      </List.Item>
    );
  }
}
export default TodoItem;
