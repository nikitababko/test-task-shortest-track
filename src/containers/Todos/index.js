import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'antd';

import { addTodo, getTodos } from 'redux/actions/todosAction';
import { TodoForm } from 'components';

import { TodoList } from 'components';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFormSubmit: (todo, user) => dispatch(addTodo(todo, user)),
    getTodos: () => dispatch(getTodos()),
  };
};

class TodosContainer extends Component {
  handleFormSubmit = (todo) => {
    this.props.handleFormSubmit(todo, this.props.user);
    this.props.getTodos();
  };

  render() {
    return (
      <>
        <Card title="Список задач">
          <TodoList
            todos={this.props.todos}
            user={this.props.user}
            onFormSubmit={this.handleFormSubmit}
          />
        </Card>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
