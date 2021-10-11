import { connect } from 'react-redux';
import React, { Component } from 'react';

import { TodoItem } from 'components';
import { toggleTodoStatus } from 'redux/actions/todosAction';

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleTodoStatus: (todo) => dispatch(toggleTodoStatus(todo)),
  };
};

class TodoItemContainer extends Component {
  state = {
    isModalVisible: false,
  };

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    this.setState({ isModalVisible: false });
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    const { handleToggleTodoStatus, todo, onTodoRemove } = this.props;

    return (
      <TodoItem
        isModalVisible={this.state.isModalVisible}
        showModal={this.showModal}
        handleOk={this.handleOk}
        handleCancel={this.handleCancel}
        todo={todo}
        onTodoRemove={onTodoRemove}
        handleToggleTodoStatus={handleToggleTodoStatus}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(TodoItemContainer);
