import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Popconfirm, Select, Table } from 'antd';
import { useState } from 'react';
import './index.less';

const { Option } = Select;

const GradeClassSetting = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([]);
  const [editingKey, setEditingKey] = useState('');

  const columns = [
    {
      title: '序号',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: '年级名称',
      dataIndex: 'grade',
      key: 'grade',
    },
    {
      title: '班级名称',
      dataIndex: 'class',
      key: 'class',
      render: (text, record) => {
        const editable = editingKey === record.key;
        return editable ? (
          <Input
            value={record.class}
            onChange={(e) => handleInputChange(record.key, 'class', e.target.value)}
          />
        ) : (
          text
        );
      },
    },
    {
      title: '班主任',
      dataIndex: 'teacher',
      key: 'teacher',
    },
    {
      title: '班级分类',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <>
          {editingKey === record.key ? (
            <Button onClick={() => save(record.key)}>保存</Button>
          ) : (
            <Button onClick={() => edit(record)}>
              <EditOutlined />
            </Button>
          )}
          <Popconfirm title="确定删除吗？" onConfirm={() => handleDelete(record.key)}>
            <Button type="danger">
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      const newData = {
        key: dataSource.length ? dataSource[dataSource.length - 1].key + 1 : 1,
        grade: values.grade,
        class: values.class,
        teacher: values.teacher,
        category: values.category,
      };
      setDataSource([...dataSource, newData]);
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const edit = (record) => {
    form.setFieldsValue({
      grade: record.grade,
      class: record.class,
      teacher: record.teacher,
      category: record.category,
    });
    setEditingKey(record.key);
  };

  const save = (key) => {
    const newData = dataSource.map((item) =>
      item.key === key ? { ...item, class: form.getFieldValue('class') } : item,
    );
    setDataSource(newData);
    setEditingKey('');
  };

  const handleInputChange = (key, field, value) => {
    const newData = dataSource.map((item) =>
      item.key === key ? { ...item, [field]: value } : item,
    );
    setDataSource(newData);
  };

  return (
    <div className="grade-class-setting">
      <Button type="primary" onClick={showModal}>
        <PlusOutlined /> 新增
      </Button>
      <Table dataSource={dataSource} columns={columns} rowKey="key" />
      <Modal title="新增班级" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="vertical">
          <Form.Item
            name="grade"
            label="年级名称"
            rules={[{ required: true, message: '请输入年级名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="class"
            label="班级名称"
            rules={[{ required: true, message: '请输入班级名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="teacher"
            label="班主任"
            rules={[{ required: true, message: '请输入班主任' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="班级分类"
            rules={[{ required: true, message: '请选择班级分类' }]}
          >
            <Select>
              <Option value="普通班">普通班</Option>
              <Option value="飞天班">飞天班</Option>
              <Option value="致远班">致远班</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default GradeClassSetting;
