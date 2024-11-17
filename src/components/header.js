import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined } from "@ant-design/pro-layout";

const { Header } = Layout;

const SubMenu = Menu.SubMenu;

export default function App() {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <SubMenu key="1" title="App">
          <Menu.ItemGroup>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="2" title="Navigation Two">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
}