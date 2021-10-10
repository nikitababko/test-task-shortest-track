import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Input } from 'antd';

import './Auth.scss';
import API from 'utils/api';
import { auth } from 'redux/actions/authAction';

const mapStateToProps = (store) => {
  return {
    isAuth: store.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAuth: (values) => dispatch(auth(values)),
  };
};

class Auth extends Component {
  // state = {
  //   username: '',
  //   password: '',
  // };

  componentDidMount() {
    API.createUsers();
  }

  // handleChangeInput = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };

  handleSubmit = (values) => {
    this.props.handleAuth(values);
  };

  handleSubmitFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <div className="auth">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={this.handleSubmit}
          onFinishFailed={this.handleSubmitFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
            // value={this.state.username}
            // onChange={this.handleChangeInput}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            // value={this.state.password}
            // onChange={this.handleChangeInput}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
