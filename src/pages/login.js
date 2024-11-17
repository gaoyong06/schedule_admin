import React from "react";
import { Form, Input, Button } from "antd";
import AppLayout from "../components/Layout";

export default function Login() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <AppLayout>
      <h1>Login</h1>
      <Form
        name="normal_login"
        className="login-form"
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
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </AppLayout>
  );
}