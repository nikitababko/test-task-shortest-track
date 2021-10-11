import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Form, Button, Input } from 'antd';

import { auth } from 'redux/actions/authAction';

import './Auth.scss';

const mapDispatchToProps = (dispatch) => {
  return {
    handleAuth: (values) => dispatch(auth(values)),
  };
};

class Auth extends Component {
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
  formRef = React.createRef();

  componentDidMount() {
    this.props.history.push('/auth');
    console.log(this.formRef.resetFields);
  }

  handleSubmit = (values) => {
    this.props.handleAuth(values);
    // this.setState({});

    // this.setState((prevState, prevProps) => {
    //   console.log(prevState);
    //   return { username: '' };
    // });
    // console.log(this.state);
  };

  render() {
    return (
      <div className="auth">
        <Form
          ref={this.formRef}
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
          onFinish={() => this.handleSubmit(this.state)}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            value={this.state.username}
            onChange={(e) => this.handleChangeInput(e)}
            rules={[
              {
                required: true,
                message: 'Введите свой username!',
              },
            ]}
          >
            <Input
              name="username"
              value={this.state.username}
              onChange={(e) => this.handleChangeInput(e)}
            />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            value={this.state.password}
            onChange={(e) => this.handleChangeInput(e)}
            rules={[
              {
                required: true,
                message: 'Введите свой пароль!',
              },
            ]}
          >
            <Input.Password
              name="password"
              value={this.state.password}
              onChange={(e) => this.handleChangeInput(e)}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Auth));
