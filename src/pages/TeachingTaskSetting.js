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
  Tabs,
  message,
} from "antd";
import "./TeachingTaskSetting.css";

const { Option } = Select;
const { TabPane } = Tabs;

const TeachingTaskSetting = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      subject: "语文",
      class: "七年级(1)班",
      teacher: "张三",
      location: "教室1",
    },
    // 其他数据...
  ]);

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [teachers, setTeachers] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        // 处理表单提交逻辑
        const newData = {
          key: dataSource.length + 1,
          ...values,
        };
        setDataSource([...dataSource, newData]);
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

  const handleSubjectChange = (value) => {
    setSelectedSubject(value);
    setSelectedClass(null);
    setTeachers([]);
  };

  const handleClassChange = (value) => {
    setSelectedClass(value);
    // 根据选择的班级设置任课教师
    if (value === "七年级(1)班") {
      setTeachers(["张三", "李四", "王五"]);
    } else {
      setTeachers([]);
    }
  };

  const columns = [
    {
      title: "科目",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "班级",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "教师",
      dataIndex: "teacher",
      key: "teacher",
    },
    {
      title: "教学场地",
      dataIndex: "location",
      key: "location",
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

  return (
    <div className="teaching-location-setting">
      <Button type="primary" onClick={showModal}>
        新增
      </Button>
      <Table columns={columns} dataSource={dataSource} />
      <Modal
        title="教学场地设置"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
      >
        <Form form={form} layout="vertical">
          <Tabs defaultActiveKey="1">
            <TabPane tab="七年级" key="1">
              <Form.Item
                name="subject"
                label="科目"
                rules={[{ required: true, message: "请选择科目" }]}
              >
                <Select placeholder="请选择科目" onChange={handleSubjectChange}>
                  <Option value="语文">语文</Option>
                  <Option value="数学">数学</Option>
                  {/* 其他选项... */}
                </Select>
              </Form.Item>
              <Form.Item
                name="class"
                label="班级"
                rules={[{ required: true, message: "请选择班级" }]}
              >
                <Select
                  placeholder="请选择班级"
                  onChange={handleClassChange}
                  disabled={!selectedSubject}
                >
                  <Option value="七年级(1)班">七年级(1)班</Option>
                  <Option value="七年级(2)班">七年级(2)班</Option>
                  {/* 其他选项... */}
                </Select>
              </Form.Item>
              <Form.Item
                name="teacher"
                label="教师"
                rules={[{ required: true, message: "请选择教师" }]}
              >
                <Select placeholder="请选择教师" disabled={!selectedClass}>
                  {teachers.map((teacher) => (
                    <Option key={teacher} value={teacher}>
                      {teacher}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                name="location"
                label="教学场地"
                rules={[{ required: true, message: "请选择教学场地" }]}
              >
                <Select placeholder="请选择教学场地">
                  <Option value="教室1">教室1</Option>
                  <Option value="教室2">教室2</Option>
                  {/* 其他选项... */}
                </Select>
              </Form.Item>
            </TabPane>
            {/* 其他年级的选项卡... */}
          </Tabs>
        </Form>
      </Modal>
    </div>
  );
};

export default TeachingTaskSetting;