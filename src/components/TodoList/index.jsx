import React, { Component } from 'react';
import { List, Empty } from 'antd';

import { TodoItem } from 'components';

import './TodoList.scss';

class TodoList extends Component {
  render() {
    const { todos, user } = this.props;

    return (
      <div className="todo-form">
        <List
          locale={{
            emptyText: <Empty description={<span>Список задач пуст</span>} />,
          }}
          dataSource={todos.filter((todo) => todo.userId === user.id)}
          renderItem={(todo) =>
            todo.userId === user.id && <TodoItem todo={todo} />
          }
          pagination={{
            position: 'bottom',
            pageSize: 10,
          }}
        />
      </div>
    );
  }
}

export default TodoList;
