import { TodoItem } from 'components';
import React, { Component } from 'react';

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
    return (
      <TodoItem
        isModalVisible={this.state.isModalVisible}
        showModal={this.showModal}
        handleOk={this.handleOk}
        handleCancel={this.handleCancel}
      />
    );
  }
}

export default TodoItemContainer;
