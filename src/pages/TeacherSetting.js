// src/pages/TeacherSetting.js

import React, { useState, useEffect } from "react";
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
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;

const TeacherSetting = () => {
  const [teachers, setTeachers] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingTeacher, setEditingTeacher] = useState(null);

  useEffect(() => {
    // 模拟从服务器获取教师数据
    setTeachers([
      {
        id: 1,
        name: "张三",
        shortName: "张",
        identity: "普通教师",
        status: "在职",
      },
      {
        id: 2,
        name: "李四",
        shortName: "李",
        identity: "管理员",
        status: "离职",
      },
    ]);
  }, []);

  const columns = [
    {
      title: "序号",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "简称",
      dataIndex: "shortName",
      key: "shortName",
    },
    {
      title: "身份",
      dataIndex: "identity",
      key: "identity",
    },
    {
      title: "在职状态",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <>
          <Button type="link" onClick={() => showModal(record)}>
            <EditOutlined />
          </Button>
          <Button type="link" onClick={() => deleteTeacher(record.id)}>
            <DeleteOutlined />
          </Button>
        </>
      ),
    },
  ];

  const showModal = (record) => {
    setEditingTeacher(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (editingTeacher) {
        // 编辑教师
        setTeachers(
          teachers.map((teacher) =>
            teacher.id === editingTeacher.id
              ? { ...teacher, ...values }
              : teacher
          )
        );
      } else {
        // 新增教师
        setTeachers([
          ...teachers,
          { id: teachers.length + 1, ...values, shortName: values.name[0] },
        ]);
      }
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const deleteTeacher = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const batchUpdateStatus = (status) => {
    setTeachers(
      teachers.map((teacher) =>
        selectedRowKeys.includes(teacher.id) ? { ...teacher, status } : teacher
      )
    );
    setSelectedRowKeys([]);
  };

  return (
    <div>
      <Button type="primary" onClick={() => showModal(null)}>
        <PlusOutlined /> 新增
      </Button>
      <Button onClick={() => batchUpdateStatus("在职")}>批量设为在职</Button>
      <Button onClick={() => batchUpdateStatus("离职")}>批量设为离职</Button>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={teachers}
        rowKey="id"
      />
      <Modal
        title={editingTeacher ? "编辑教师" : "新增教师"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="姓名"
            rules={[{ required: true, message: "请输入姓名" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="shortName"
            label="简称"
            rules={[{ required: true, message: "请输入简称" }]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            name="identity"
            label="身份"
            rules={[{ required: true, message: "请选择身份" }]}
          >
            <Select>
              <Option value="普通教师">普通教师</Option>
              <Option value="管理员">管理员</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="status"
            label="在职状态"
            rules={[{ required: true, message: "请选择在职状态" }]}
          >
            <Select>
              <Option value="在职">在职</Option>
              <Option value="离职">离职</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TeacherSetting;