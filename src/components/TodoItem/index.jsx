import React, { Component } from 'react';
import { List, Modal, Button, Popconfirm, Checkbox } from 'antd';

import './TodoItem.scss';

class TodoItem extends Component {
  render() {
    const {
      todo,
      onTodoRemove,
      showModal,
      isModalVisible,
      handleOk,
      handleCancel,
      handleToggleTodoStatus,
    } = this.props;

    return (
      <div className="ant-list-items__container">
        <List.Item
          actions={[
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
          <Button
            type="link"
            onClick={showModal}
            className={`todo-tag ${todo.completed && 'cross'}`}
          >
            {todo.title}
          </Button>

          <Checkbox
            onChange={() => handleToggleTodoStatus(todo)}
            defaultChecked={todo.completed}
          />

          <Modal
            title={
              <>
                <h3>{todo.title}</h3>
                <span className="modal-date">{todo.date}</span>
              </>
            }
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <p>{todo.description}</p>
          </Modal>
        </List.Item>
      </div>
    );
  }
}
export default TodoItem;
