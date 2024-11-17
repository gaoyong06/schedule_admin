// src/pages/TeachingTaskSetting.js
import React, { useState } from "react";
import {
  Button,
  Table,
  Modal,
  Form,
  Input,
  Select,
  Checkbox,
  message,
} from "antd";
import "./TeachingTaskSetting.css";

const { Option } = Select;

const TeachingTaskSetting = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        // 处理表单提交逻辑
        message.success("添加成功");
        setIsModalVisible(false);
      })
      .catch((errorInfo) => {
        console.log("Failed:", errorInfo);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "年级",
      dataIndex: "grade",
      key: "grade",
    },
    {
      title: "班级",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "科目",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "教师",
      dataIndex: "teacher",
      key: "teacher",
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <Button type="link" onClick={() => showModal()}>
          编辑
        </Button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      grade: "七年级",
      class: "七年级(1)班",
      subject: "语文",
      teacher: "张三",
    },
    // 其他数据...
  ];

  return (
    <div className="course-plan-setting">
      <Button type="primary" onClick={showModal}>
        新增
      </Button>
      <Table columns={columns} dataSource={data} />
      <Modal
        title="课程计划设置"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="grade"
            label="年级"
            rules={[{ required: true, message: "请选择年级" }]}
          >
            <Select placeholder="请选择年级">
              <Option value="七年级">七年级</Option>
              <Option value="八年级">八年级</Option>
              {/* 其他选项... */}
            </Select>
          </Form.Item>
          <Form.Item
            name="class"
            label="班级"
            rules={[{ required: true, message: "请选择班级" }]}
          >
            <Select placeholder="请选择班级">
              <Option value="七年级(1)班">七年级(1)班</Option>
              <Option value="七年级(2)班">七年级(2)班</Option>
              {/* 其他选项... */}
            </Select>
          </Form.Item>
          <Form.Item
            name="subject"
            label="科目"
            rules={[{ required: true, message: "请选择科目" }]}
          >
            <Select placeholder="请选择科目">
              <Option value="语文">语文</Option>
              <Option value="数学">数学</Option>
              {/* 其他选项... */}
            </Select>
          </Form.Item>
          <Form.Item
            name="teacher"
            label="教师"
            rules={[{ required: true, message: "请选择教师" }]}
          >
            <Select placeholder="请选择教师">
              <Option value="张三">张三</Option>
              <Option value="李四">李四</Option>
              {/* 其他选项... */}
            </Select>
          </Form.Item>
          <Form.Item
            name="weekType"
            label="单双周"
            rules={[{ required: true, message: "请选择单双周" }]}
          >
            <Select placeholder="请选择单双周">
              <Option value="单周">单周</Option>
              <Option value="双周">双周</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="matchGroup"
            label="匹配组"
            rules={[{ required: true, message: "请选择匹配组" }]}
          >
            <Select placeholder="请选择匹配组">
              <Option value="体育">体育</Option>
              <Option value="活动">活动</Option>
              {/* 其他选项... */}
            </Select>
          </Form.Item>
          <Form.Item
            name="headTeacher"
            label="班主任"
            rules={[{ required: true, message: "请选择班主任" }]}
          >
            <Select placeholder="请选择班主任">
              <Option value="王五">王五</Option>
              <Option value="赵六">赵六</Option>
              {/* 其他选项... */}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TeachingTaskSetting;
