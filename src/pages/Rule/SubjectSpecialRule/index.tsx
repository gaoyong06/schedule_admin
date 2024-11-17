import { Button, Form, Input, Modal, Select, Table, Tabs, message } from 'antd';
import { useState } from 'react';
import './index.less';

const { TabPane } = Tabs;
const { Option } = Select;

const SubjectSpecialRule = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      title: '科目',
      dataIndex: 'subjects',
      key: 'subjects',
    },
    {
      title: '要求',
      dataIndex: 'requirement',
      key: 'requirement',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="link" onClick={() => editRequirement(record)}>
            修改
          </Button>
          <Button type="link" onClick={() => deleteRequirement(record.key)}>
            删除
          </Button>
        </span>
      ),
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const newData = {
          key: dataSource.length,
          subjects: values.subjects.join(' | '),
          requirement: values.requirement,
        };
        setDataSource([...dataSource, newData]);
        setIsModalVisible(false);
        form.resetFields();
        message.success('添加成功');
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const editRequirement = (record) => {
    form.setFieldsValue({
      subjects: record.subjects.split(' | '),
      requirement: record.requirement,
    });
    showModal();
  };

  const deleteRequirement = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
    message.success('删除成功');
  };

  return (
    <div className="subject-special-rule">
      <Button type="primary" onClick={showModal}>
        添加
      </Button>
      <Table dataSource={dataSource} columns={columns} rowKey="key" />
      <Modal
        title="科目特殊排课要求"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="科目互斥限制" key="1">
            <Form form={form} layout="vertical">
              <Form.Item
                name="subjects"
                label="科目互斥"
                rules={[{ required: true, message: '请选择科目' }]}
              >
                <Select mode="multiple" placeholder="请选择科目">
                  <Option value="语文">语文</Option>
                  <Option value="数学">数学</Option>
                  <Option value="英语">英语</Option>
                  <Option value="物理">物理</Option>
                  <Option value="化学">化学</Option>
                  <Option value="生物">生物</Option>
                  <Option value="历史">历史</Option>
                  <Option value="地理">地理</Option>
                  <Option value="政治">政治</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="requirement"
                label="要求"
                rules={[{ required: true, message: '请输入要求' }]}
              >
                <Input placeholder="请输入要求" />
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="科目顺序限制" key="2">
            <Form form={form} layout="vertical">
              <Form.Item
                name="subjects"
                label="科目顺序"
                rules={[{ required: true, message: '请选择科目' }]}
              >
                <Select mode="multiple" placeholder="请选择科目">
                  <Option value="语文">语文</Option>
                  <Option value="数学">数学</Option>
                  <Option value="英语">英语</Option>
                  <Option value="物理">物理</Option>
                  <Option value="化学">化学</Option>
                  <Option value="生物">生物</Option>
                  <Option value="历史">历史</Option>
                  <Option value="地理">地理</Option>
                  <Option value="政治">政治</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="requirement"
                label="要求"
                rules={[{ required: true, message: '请输入要求' }]}
              >
                <Input placeholder="请输入要求" />
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  );
};

export default SubjectSpecialRule;
