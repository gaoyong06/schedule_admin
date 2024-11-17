import { Button, Form, Input, Modal, Select } from 'antd';
import { useState } from 'react';
import './index.less';

const { Option } = Select;

const CreateSchedule = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // 处理表单提交逻辑
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="create-schedule-container">
      <div className="content">
        <Button type="primary" size="large" className="create-button" onClick={showModal}>
          创建课表方案
        </Button>
        <Modal
          title="新建课程方案"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          destroyOnClose
        >
          <Form layout="vertical">
            <Form.Item
              label="课程名称"
              name="courseName"
              rules={[{ required: true, message: '请输入课程名称' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="工作日"
              name="workDays"
              rules={[{ required: true, message: '请选择工作日' }]}
            >
              <Select placeholder="请选择工作日">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="每天"
              name="dailyLessons"
              rules={[{ required: true, message: '请选择每天课时数' }]}
            >
              <Select placeholder="请选择每天课时数">
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="上午"
              name="morningLessons"
              rules={[{ required: true, message: '请选择上午课时数' }]}
            >
              <Select placeholder="请选择上午课时数">
                <Option value="0">0</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="下午"
              name="afternoonLessons"
              rules={[{ required: true, message: '请选择下午课时数' }]}
            >
              <Select placeholder="请选择下午课时数">
                <Option value="0">0</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="晚上"
              name="eveningLessons"
              rules={[{ required: true, message: '请选择晚上课时数' }]}
            >
              <Select placeholder="请选择晚上课时数">
                <Option value="0">0</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="最多连课"
              name="maxConsecutiveLessons"
              rules={[{ required: true, message: '请选择最多连课数' }]}
            >
              <Select placeholder="请选择最多连课数">
                <Option value="0">0</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default CreateSchedule;
