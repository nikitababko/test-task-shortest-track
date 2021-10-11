import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TodosContainer } from 'containers';
import { getTodos } from 'redux/actions/todosAction';

const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => dispatch(getTodos()),
  };
};

class Home extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  componentDidUpdate() {
    this.props.getTodos();
  }

  render() {
    return <TodosContainer />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
