import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

import './TodoForm.scss';

class TodoForm extends Component {
  onFinish = (values) => {
    this.props.onFormSubmit(values);
  };

  render() {
    return (
      <div className="todo-form">
        <Form
          onFinish={this.onFinish}
          layout="horizontal"
          className="todo-form"
        >
          <Form.Item
            name={'title'}
            rules={[{ required: true, message: 'Введите заголовок задачи' }]}
          >
            <Input placeholder="Заголовок задачи" />
          </Form.Item>

          <Form.Item
            name={'description'}
            rules={[{ required: true, message: 'Введите описание задачи' }]}
          >
            <Input placeholder="Описание задачи" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            <PlusCircleFilled />
            Создать
          </Button>
        </Form>
      </div>
    );
  }
}

export default TodoForm;
