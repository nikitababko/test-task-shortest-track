import React from 'react';
import { Form, Button, Input } from 'antd';

import './Auth.scss';

const Auth = (props) => {
  const { handleSubmit } = props;

  const [form] = Form.useForm();

  return (
    <div className="auth">
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: false,
        }}
        onFinish={(state) => handleSubmit(state, form)}
        autoComplete="off"
      >
        <Form.Item
          shouldUpdate
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Введите свой username!',
            },
          ]}
        >
          <Input />
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
          <Input.Password />
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
};

export default Auth;
