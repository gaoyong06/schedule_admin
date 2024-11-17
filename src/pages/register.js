import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined } from "@ant-design/pro-layout";

const { Content } = UserOutlined;

export default function Register() {
  return (
    <Content>
      <h1>Register</h1>
      <Form
        name="register"
        className="register-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item>
          <Input name="username" placeholder="Username" />
        </Form.Item>
        <Form.Item>
          <Input name="password" type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="register-form-button"
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </Content>
  );
}

const onFinish = (values) => {
  console.log("Received values of form: ", values);
};