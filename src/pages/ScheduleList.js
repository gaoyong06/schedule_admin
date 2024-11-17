// src/pages/ScheduleList.js
import React, { useState, useEffect } from "react";
import { Table, Button, Modal, message } from "antd";
import { useHistory } from "react-router-dom";
import "./ScheduleList.css";

const ScheduleList = () => {
  const [dataSource, setDataSource] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // 模拟从服务器获取数据
    setDataSource([
      {
        key: "1",
        name: "2022-2023学年第一学期课表",
        createdAt: "2022-08-04 14:27:04",
        updatedAt: "2022-08-04 14:27:04",
        creator: "xughost",
        status: "审核中",
      },
      // 可以添加更多模拟数据
    ]);
  }, []);

  const handleOpen = (record) => {
    // 处理打开课表方案的逻辑
    history.push(`/schedule/edit/${record.key}`);
  };

  const handleSaveAs = (record) => {
    // 处理另存课表方案的逻辑
    message.success("另存成功");
  };

  const handleDelete = (record) => {
    Modal.confirm({
      title: "确认删除",
      content: "确认要删除这个课表方案吗？",
      onOk() {
        // 处理删除课表方案的逻辑
        setDataSource(dataSource.filter((item) => item.key !== record.key));
        message.success("删除成功");
      },
    });
  };

  const columns = [
    {
      title: "序号",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "方案名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "创建时间",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "最后编辑时间",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },
    {
      title: "创建人",
      dataIndex: "creator",
      key: "creator",
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <>
          <Button type="link" onClick={() => handleOpen(record)}>
            打开
          </Button>
          <Button type="link" onClick={() => handleSaveAs(record)}>
            另存
          </Button>
          <Button type="link" onClick={() => handleDelete(record)}>
            删除
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="schedule-list-container">
      <Button type="primary" onClick={() => history.push("/create-schedule")}>
        新建课表方案
      </Button>
      <Button type="default" onClick={() => history.push("/schedule-history")}>
        历史方案
      </Button>
      <Table dataSource={dataSource} columns={columns} rowKey="key" />
    </div>
  );
};

export default ScheduleList;