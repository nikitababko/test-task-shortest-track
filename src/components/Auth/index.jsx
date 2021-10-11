import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';

import './Auth.scss';

class Auth extends Component {
  render() {
    const { handleChangeInput, handleSubmit, state } = this.props;

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
          onFinish={() => handleSubmit(state)}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Введите свой username!',
              },
            ]}
          >
            <Input
              name="username"
              value={state.username}
              onChange={(e) => handleChangeInput(e)}
            />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                message: 'Введите свой пароль!',
              },
            ]}
          >
            <Input.Password
              name="password"
              value={state.password}
              onChange={(e) => handleChangeInput(e)}
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

export default Auth;
