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
  state = {
    username: '',
    password: '',
  };

  handleChangeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    this.props.history.push('/auth');
  }

  handleSubmit = (values) => {
    this.props.handleAuth(values);

    console.log(this.state);

    this.setState({
      username: '',
    });
    this.setState({
      password: '',
    });

    console.log(this.state);
  };

  render() {
    return (
      <Auth
        handleChangeInput={this.handleChangeInput}
        handleSubmit={this.handleSubmit}
        state={this.state}
      />
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(AuthContainer));
