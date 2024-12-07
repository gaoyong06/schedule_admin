import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Popconfirm, Select, Table } from 'antd';
import { useState } from 'react';
import './index.less';

const { Option } = Select;

// 定义数据源的类型
interface Facility {
  key: number;
  name: string;
  type: string;
  capacity: number;
}

const FacilitySetting = () => {
  const [form] = Form.useForm<Facility>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataSource, setDataSource] = useState<Facility[]>([]);
  const [editingKey, setEditingKey] = useState<number | string>('');

  const columns = [
    {
      title: '序号',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: '场地名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '容纳班级数',
      dataIndex: 'capacity',
      key: 'capacity',
    },
    {
      title: '操作',
      key: 'action',
      render: (text: string, record: Facility) => (
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
              setDataSource(dataSource.filter((item) => item.key !== record.key));
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
    setEditingKey('');
    form.resetFields();
  };

  const handleOk = () => {
    form.validateFields().then((values: Facility) => {
      if (editingKey) {
        setDataSource(
          dataSource.map((item: Facility) =>
            item.key === editingKey ? { ...item, ...values } : item,
          ),
        );
      } else {
        const newKey = dataSource.length ? dataSource[dataSource.length - 1].key + 1 : 1;
        const newRecord: Facility = {
          key: newKey,
          name: values.name,
          type: values.type,
          capacity: values.capacity,
        };
        setDataSource([...dataSource, newRecord]);
      }
      setIsModalVisible(false);
      setEditingKey('');
      form.resetFields();
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingKey('');
    form.resetFields();
  };

  return (
    <div className="facility-setting">
      <Button type="primary" onClick={showModal} icon={<PlusOutlined />}>
        新增
      </Button>
      <Table dataSource={dataSource} columns={columns} rowKey="key" />
      <Modal
        title={editingKey ? '编辑教学场地' : '新增教学场地'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="场地名称"
            rules={[{ required: true, message: '请输入场地名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="type" label="类型" rules={[{ required: true, message: '请选择类型' }]}>
            <Select>
              <Option value="专用教学场所">专用教学场所</Option>
              <Option value="共享教学场所">共享教学场所</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="capacity"
            label="容纳班级数"
            rules={[{ required: true, message: '请输入容纳班级数' }]}
          >
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FacilitySetting;
