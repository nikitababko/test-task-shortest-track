import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card } from 'antd';

import { addTodo } from 'redux/actions/todosAction';
import { TodoForm } from 'components';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFormSubmit: (todo, user) => dispatch(addTodo(todo, user)),
  };
};

class TodosContainer extends Component {
  handleFormSubmit = (todo) => {
    this.props.handleFormSubmit(todo, this.props.user);
    this.props.history.goBack();
  };

  render() {
    return (
      <>
        <Card title="Создать новую задачу">
          <TodoForm onFormSubmit={this.handleFormSubmit} />
        </Card>
      </>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TodosContainer)
);
