import React, { Component } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Button } from 'antd';

import { addTodo, getTodos, removeTodo } from 'redux/actions/todosAction';

import { TodoList } from 'components';
import { RouteNames } from 'routes';
import { logout } from 'redux/actions/authAction';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    user: state.auth.user,
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFormSubmit: (todo, user) => dispatch(addTodo(todo, user)),
    getTodos: () => dispatch(getTodos()),
    handleLogout: () => dispatch(logout()),
    handleRemoveTodo: (todo) => dispatch(removeTodo(todo)),
  };
};

class TodosContainer extends Component {
  state = {
    redirect: false,
  };

  handleFormSubmit = (todo) => {
    this.props.handleFormSubmit(todo, this.props.user);
    this.props.getTodos();
  };

  handleLogout = () => {
    this.props.handleLogout();
    this.setState({ redirect: true });
  };

  handleRemoveTodo = (todo) => {
    this.props.handleRemoveTodo(todo);
  };

  // handleToggleTodoStatus = (todo) => {
  //   dispatch(toggleTodoStatus(todo));
  // };

  render() {
    return (
      <>
        {this.state.redirect && <Redirect to="/auth" />}

        <Card
          title={
            <div className="row">
              <h3>Список задач</h3>
              <Link to={RouteNames.ADD_TODO}>
                <Button>Добавить задачу</Button>
              </Link>
              <Button onClick={this.handleLogout}>Выйти</Button>
            </div>
          }
        >
          <TodoList
            todos={this.props.todos}
            user={this.props.user}
            isAuth={this.props.isAuth}
            onFormSubmit={this.handleFormSubmit}
            onTodoRemove={this.handleRemoveTodo}
            // onTodoToggle={handleToggleTodoStatus}
          />
        </Card>
      </>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TodosContainer)
);
