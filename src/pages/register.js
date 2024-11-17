import React from "react";
import { Form, Input, Button } from "antd";
import AppLayout from "../components/Layout";

export default function Register() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <AppLayout>
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
    </AppLayout>
  );
}