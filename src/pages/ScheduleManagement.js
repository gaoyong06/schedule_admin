import React from "react";
import { Form, Input, Button, DatePicker } from "antd";

export default function ScheduleManagement() {
  return (
    <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
      <h1>Schedule Management</h1>
      <Form layout="vertical">
        <Form.Item label="课程名称">
          <Input placeholder="请输入课程名称" />
        </Form.Item>
        <Form.Item label="教师">
          <Input placeholder="请输入教师姓名" />
        </Form.Item>
        <Form.Item label="教室">
          <Input placeholder="请输入教室名称" />
        </Form.Item>
        <Form.Item label="时间">
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}