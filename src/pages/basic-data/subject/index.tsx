import { Button, Form, Input, message, Modal, Select, Table } from 'antd';
import { useState } from 'react';
import './index.less';

const { Option } = Select;

const SubjectSetting = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      const newSubject = {
        key: subjects.length + 1,
        ...values,
      };
      setSubjects([...subjects, newSubject]);
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleBatchAdd = () => {
    // 批量添加逻辑
    message.success('批量添加成功');
  };

  const handleEdit = (record) => {
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleDelete = (key) => {
    const newSubjects = subjects.filter((subject) => subject.key !== key);
    setSubjects(newSubjects);
  };

  const columns = [
    {
      title: '科目',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: '科目全称',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: '科目简称',
      dataIndex: 'shortName',
      key: 'shortName',
    },
    {
      title: '科目类别',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="link" onClick={() => handleEdit(record)}>
            编辑
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record.key)}>
            删除
          </Button>
        </span>
      ),
    },
  ];

  return (
    <div className="subject-setting">
      <Button type="primary" onClick={showModal}>
        新增
      </Button>
      <Button type="primary" onClick={handleBatchAdd}>
        批量新增
      </Button>
      <Table dataSource={subjects} columns={columns} rowKey="key" />
      <Modal title="科目设置" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="vertical">
          <Form.Item
            name="subject"
            label="科目"
            rules={[{ required: true, message: '请输入科目' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="fullName"
            label="科目全称"
            rules={[{ required: true, message: '请输入科目全称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="shortName"
            label="科目简称"
            rules={[{ required: true, message: '请输入科目简称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="科目类别"
            rules={[{ required: true, message: '请选择科目类别' }]}
          >
            <Select>
              <Option value="语文">语文</Option>
              <Option value="数学">数学</Option>
              <Option value="英语">英语</Option>
              <Option value="物理">物理</Option>
              <Option value="化学">化学</Option>
              <Option value="生物">生物</Option>
              <Option value="政治">政治</Option>
              <Option value="历史">历史</Option>
              <Option value="地理">地理</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default SubjectSetting;
