import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, Empty } from 'antd';

import { RouteNames } from 'routes';
import { TodoForm, TodoItem } from 'components';

import './TodoList.scss';

class TodoList extends Component {
  render() {
    return (
      <div className="todo-form">
        <Link to={RouteNames.ADD_TODO}>Добавить задачу</Link>

        <List
          locale={{
            emptyText: <Empty description={<span>Список задач пуст</span>} />,
          }}
          dataSource={this.props.todos}
          renderItem={(todo) =>
            todo.userId === this.props.user.id && <TodoItem todo={todo} />
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
