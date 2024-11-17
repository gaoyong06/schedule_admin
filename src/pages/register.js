import React from "react";
import { Form, Input, Button } from "antd";

export default function Register() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
      <h1>Register</h1>
      <Form
        name="register"
        className="register-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input type="password" placeholder="Password" />
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
    </div>
  );
}