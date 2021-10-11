import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { auth } from 'redux/actions/authAction';
import { Auth } from 'components';

const mapDispatchToProps = (dispatch) => {
  return {
    handleAuth: (values) => dispatch(auth(values)),
  };
};

class AuthContainer extends Component {
  componentDidMount() {
    this.props.history.push('/auth');
  }

  handleSubmit = (values, form) => {
    this.props.handleAuth(values);
    form.resetFields();
  };

  render() {
    return <Auth handleSubmit={this.handleSubmit} state={this.state} />;
  }
}

export default withRouter(connect(null, mapDispatchToProps)(AuthContainer));
