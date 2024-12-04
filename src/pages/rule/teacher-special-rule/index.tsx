import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Modal, Select, Tabs } from 'antd';
import { useState } from 'react';
import './index.less';

const { TabPane } = Tabs;
const { Option } = Select;

const TeacherSpecialRule = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('1');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div>
      <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
        添加
      </Button>
      <Button icon={<EditOutlined />}>修改</Button>
      <Button icon={<DeleteOutlined />}>删除</Button>

      <Modal
        title="教师特殊排课要求"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
      >
        <Tabs activeKey={activeTab} onChange={handleTabChange}>
          <TabPane tab="教师时间段限制" key="1">
            <Form layout="vertical">
              <Form.Item label="教师">
                <Select>
                  <Option value="teacher1">教师1</Option>
                  <Option value="teacher2">教师2</Option>
                </Select>
              </Form.Item>
              <Form.Item label="时间段">
                <Select mode="multiple">
                  <Option value="monday">周一</Option>
                  <Option value="tuesday">周二</Option>
                </Select>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="教师课节限制" key="2">
            <Form layout="vertical">
              <Form.Item label="教师">
                <Select>
                  <Option value="teacher1">教师1</Option>
                  <Option value="teacher2">教师2</Option>
                </Select>
              </Form.Item>
              <Form.Item label="课节">
                <Select mode="multiple">
                  <Option value="1">第1节</Option>
                  <Option value="2">第2节</Option>
                </Select>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="教师互斥限制" key="3">
            <Form layout="vertical">
              <Form.Item label="教师">
                <Select>
                  <Option value="teacher1">教师1</Option>
                  <Option value="teacher2">教师2</Option>
                </Select>
              </Form.Item>
              <Form.Item label="互斥教师">
                <Select mode="multiple">
                  <Option value="teacher3">教师3</Option>
                  <Option value="teacher4">教师4</Option>
                </Select>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="不跨中午限制" key="4">
            <Form layout="vertical">
              <Form.Item label="教师">
                <Select>
                  <Option value="teacher1">教师1</Option>
                  <Option value="teacher2">教师2</Option>
                </Select>
              </Form.Item>
              <Form.Item label="不跨中午">
                <Checkbox>不跨中午</Checkbox>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="教师连堂设置" key="5">
            <Form layout="vertical">
              <Form.Item label="教师">
                <Select>
                  <Option value="teacher1">教师1</Option>
                  <Option value="teacher2">教师2</Option>
                </Select>
              </Form.Item>
              <Form.Item label="连堂设置">
                <Input />
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  );
};

export default TeacherSpecialRule;
