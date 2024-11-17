import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

export default function AppLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            课表管理
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            教师管理
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            教室管理
          </Menu.Item>
          <Menu.Item key="4" icon={<UploadOutlined />}>
            课程管理
          </Menu.Item>
          <Menu.Item key="5" icon={<UploadOutlined />}>
            排课管理
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: "0 24px" }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: "#fff",
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}