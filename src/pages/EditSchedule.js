// src/pages/EditSchedule.js
import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Table,
  Radio,
  Modal,
  message,
} from "antd";
import { useHistory, useParams } from "react-router-dom";
import "./EditSchedule.css";

const { Option } = Select;

const EditSchedule = () => {
  const { id } = useParams();
  const history = useHistory();
  const [form] = Form.useForm();
  const [scheduleData, setScheduleData] = useState({});
  const [displayMode, setDisplayMode] = useState("weeklyHorizontal"); // 默认为周期横排
  const [isPublicTimeModalVisible, setIsPublicTimeModalVisible] =
    useState(false);

  useEffect(() => {
    // 模拟从服务器获取数据
    setScheduleData({
      name: "2022-2023学年第一学期课表",
      workDays: "5",
      lessonsPerDay: "2",
      morningLessons: "0",
      afternoonLessons: "4",
      eveningLessons: "4",
      maxConsecutiveLessons: "0",
    });

    form.setFieldsValue({
      name: "2022-2023学年第一学期课表",
      workDays: "5",
      lessonsPerDay: "2",
      morningLessons: "0",
      afternoonLessons: "4",
      eveningLessons: "4",
      maxConsecutiveLessons: "0",
    });
  }, [form]);

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        // 处理保存逻辑
        message.success("保存成功");
        // 可以在这里调用API保存数据
      })
      .catch((errorInfo) => {
        console.log("Failed:", errorInfo);
      });
  };

  const handleDisplayModeChange = (e) => {
    setDisplayMode(e.target.value);
  };

  const showPublicTimeModal = () => {
    setIsPublicTimeModalVisible(true);
  };

  const handlePublicTimeOk = () => {
    // 处理公共时段设置的保存逻辑
    setIsPublicTimeModalVisible(false);
    message.success("公共时段设置保存成功");
  };

  const handlePublicTimeCancel = () => {
    setIsPublicTimeModalVisible(false);
  };

  const columns = [
    {
      title: "星期一",
      dataIndex: "monday",
      key: "monday",
    },
    {
      title: "星期二",
      dataIndex: "tuesday",
      key: "tuesday",
    },
    {
      title: "星期三",
      dataIndex: "wednesday",
      key: "wednesday",
    },
    {
      title: "星期四",
      dataIndex: "thursday",
      key: "thursday",
    },
    {
      title: "星期五",
      dataIndex: "friday",
      key: "friday",
    },
  ];

  const dataSource = [
    {
      key: "1",
      monday: "上午1",
      tuesday: "上午2",
      wednesday: "上午3",
      thursday: "上午4",
      friday: "",
    },
    {
      key: "2",
      monday: "下午1",
      tuesday: "下午2",
      wednesday: "下午3",
      thursday: "下午4",
      friday: "",
    },
    // 可以添加更多数据
  ];

  return (
    <div className="edit-schedule-container">
      <Form form={form} layout="vertical">
        <Form.Item
          label="课表方案名称"
          name="name"
          rules={[{ required: true, message: "请输入课表方案名称" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="工作日"
          name="workDays"
          rules={[{ required: true, message: "请选择工作日" }]}
        >
          <Select>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="每天"
          name="lessonsPerDay"
          rules={[{ required: true, message: "请选择每天课时数" }]}
        >
          <Select>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="上午"
          name="morningLessons"
          rules={[{ required: true, message: "请选择上午课时数" }]}
        >
          <Select>
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
          rules={[{ required: true, message: "请选择下午课时数" }]}
        >
          <Select>
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
          rules={[{ required: true, message: "请选择晚上课时数" }]}
        >
          <Select>
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
          rules={[{ required: true, message: "请选择最多连课数" }]}
        >
          <Select>
            <Option value="0">0</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
          </Select>
        </Form.Item>
        <Button type="primary" onClick={handleSave}>
          保存设置
        </Button>
      </Form>
      <div className="display-mode">
        <span>课表展示：</span>
        <Radio.Group onChange={handleDisplayModeChange} value={displayMode}>
          <Radio.Button value="weeklyHorizontal">周期横排</Radio.Button>
          <Radio.Button value="weeklyVertical">周期竖排</Radio.Button>
        </Radio.Group>
      </div>
      <div className="schedule-table">
        <Table dataSource={dataSource} columns={columns} rowKey="key" />
      </div>
      <div className="additional-settings">
        <Button type="link" onClick={showPublicTimeModal}>
          公共时段设置
        </Button>
        <Button
          type="link"
          onClick={() => history.push("/lesson-time-settings")}
        >
          节次时间设置
        </Button>
      </div>
      <Modal
        title="公共时段设置"
        visible={isPublicTimeModalVisible}
        onOk={handlePublicTimeOk}
        onCancel={handlePublicTimeCancel}
      >
        <Form layout="vertical">
          <Form.Item
            label="时段名称"
            name="timeSlotName"
            rules={[{ required: true, message: "请输入时段名称" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="开始时间"
            name="startTime"
            rules={[{ required: true, message: "请输入开始时间" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="结束时间"
            name="endTime"
            rules={[{ required: true, message: "请输入结束时间" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EditSchedule;