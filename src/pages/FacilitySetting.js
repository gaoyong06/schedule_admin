import React, { useState } from "react";
import { Button, Modal, Form, Input, Select, Table, Popconfirm } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;

const FacilitySetting = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [editingKey, setEditingKey] = useState("");

  const columns = [
    {
      title: "序号",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "场地名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "容纳班级数",
      dataIndex: "capacity",
      key: "capacity",
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <>
          <EditOutlined
            onClick={() => {
              form.setFieldsValue(record);
              setEditingKey(record.key);
              setIsModalVisible(true);
            }}
          />
          <Popconfirm
            title="确定删除吗？"
            onConfirm={() => {
              setDataSource(
                dataSource.filter((item) => item.key !== record.key)
              );
            }}
          >
            <DeleteOutlined style={{ marginLeft: 10 }} />
          </Popconfirm>
        </>
      ),
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
    setEditingKey("");
    form.resetFields();
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (editingKey) {
        setDataSource(
          dataSource.map((item) =>
            item.key === editingKey ? { ...item, ...values } : item
          )
        );
      } else {
        setDataSource([
          ...dataSource,
          {
            key: dataSource.length
              ? dataSource[dataSource.length - 1].key + 1
              : 1,
            ...values,
          },
        ]);
      }
      setIsModalVisible(false);
      setEditingKey("");
      form.resetFields();
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingKey("");
    form.resetFields();
  };

  return (
    <div>
      <Button type="primary" onClick={showModal} icon={<PlusOutlined />}>
        新增
      </Button>
      <Table dataSource={dataSource} columns={columns} rowKey="key" />
      <Modal
        title={editingKey ? "编辑教学场地" : "新增教学场地"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="场地名称"
            rules={[{ required: true, message: "请输入场地名称" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label="类型"
            rules={[{ required: true, message: "请选择类型" }]}
          >
            <Select>
              <Option value="专用教学场所">专用教学场所</Option>
              <Option value="共享教学场所">共享教学场所</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="capacity"
            label="容纳班级数"
            rules={[{ required: true, message: "请输入容纳班级数" }]}
          >
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FacilitySetting;
