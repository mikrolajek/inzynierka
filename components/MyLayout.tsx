import React, { ReactNode, useState } from "react";
import "antd/dist/antd.css";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
  MailOutlined,
  AimOutlined,
  AlertOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Breadcrumb } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import { SelectedPanelField } from "../utils/selectedPanel";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

type IProps = {
  children?: ReactNode;
  selectedField: number | string;
  flexCenter?: boolean;
};

// function capitalize(s) {
//   return s && s[0].toUpperCase() + s.slice(1);
// }

const MyLayout = ({ children, selectedField, flexCenter }: IProps) => {
  const [collapsed, onCollapse] = useState(false);

  const router = useRouter();
  const routePathSplit = router.asPath.split("/").slice(1);

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            selectedKeys={[`${selectedField}`]}
            mode="inline"
          >
            {!collapsed && (
              <div
                style={{
                  height: 60,
                  fontSize: 20,
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img width={150} height={40} src="logo.png" />
              </div>
            )}
            {collapsed && (
              <div
                style={{
                  height: 60,
                  fontSize: 10,
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img width={150} height={38} src="logo-s.png" />
              </div>
            )}
            <Menu.Item
              key={SelectedPanelField.DASHBOARD}
              icon={<PieChartOutlined />}
            >
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </Menu.Item>
            <Menu.Item
              key={SelectedPanelField.NAWIGACJA}
              icon={<AimOutlined />}
            >
              <Link href="/navi">
                <a>Nawigacja</a>
              </Link>
            </Menu.Item>
            <Menu.Item key={SelectedPanelField.POSTS} icon={<MailOutlined />}>
              <Link href="/p">
                <a>Aktualności</a>
              </Link>
            </Menu.Item>
            <SubMenu
              key={SelectedPanelField.USERS}
              icon={<TeamOutlined />}
              title="Zasoby ludzkie"
            >
              <Menu.Item key={SelectedPanelField.EMPLOYEES}>
                <Link href="/users/employees">
                  <a>Pracownicy</a>
                </Link>
              </Menu.Item>
              <Menu.Item key={SelectedPanelField.TEAMS}>
                <Link href="/users/teams">
                  <a>Zespoł</a>
                </Link>
              </Menu.Item>
              <Menu.Item key={SelectedPanelField.ROLES}>
                <Link href="/users/roles">
                  <a>Role</a>
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item
              key={SelectedPanelField.STANOWISKA}
              icon={<DesktopOutlined />}
            >
              <Link href="/stanowiska">
                <a>Stanowiska</a>
              </Link>
            </Menu.Item>
            <SubMenu key="sub2" icon={<AlertOutlined />} title="Awarie">
              <Menu.Item key="6">Awarie bieżące - hala</Menu.Item>
              <Menu.Item key="8">Awarie historyczne</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Pliki
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="header">
            <div className="logo" />
            <Menu
              style={{ justifyContent: "right" }}
              theme="dark"
              mode="horizontal"
            >
              <Menu.Item icon={<LogoutOutlined />} key="10">
                Log Out
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {routePathSplit.map((path, index) => {
                const hrefPath = routePathSplit.slice(0, index + 1).join("/");
                return (
                  <Breadcrumb.Item key={index}>
                    <Link href={`/${hrefPath}`} as={`/${hrefPath}`}>
                      <a>{path}</a>
                    </Link>
                  </Breadcrumb.Item>
                );
              })}
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Created with ❤️ by Kamil Mikołajek
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default MyLayout;
