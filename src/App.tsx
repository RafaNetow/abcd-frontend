import React from "react";
// import ref from "./containers/references/References";
import "./App.css";

import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import StudentInformation from "./containers/registration/StudentInformation";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

interface IProps {}

interface IState {
  currentComponent: string;
}

interface ComponentDictionary {
  [name: string]: any;
}

const mainComponents: ComponentDictionary = {
  ficha: <StudentInformation />
};

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentComponent: ""
    };
  }

  changeCurrentMainComponent = (component: any) => {
    console.log(component);
    let currentComponent = component.key;
    console.log(currentComponent, ".......", mainComponents);
    console.log(typeof mainComponents[currentComponent]);
    this.setState({ currentComponent });
  };

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <h2 style={{ color: "white" }}> ABCD </h2>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          ></Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu
                key="matricula"
                title={
                  <span>
                    <Icon type="schedule" />
                    Matricula
                  </span>
                }
              >
                <Menu.Item key="1">
                  <Icon type="unordered-list" />
                  List
                </Menu.Item>
                <Menu.Item
                  onClick={this.changeCurrentMainComponent}
                  key="ficha"
                >
                  <Icon type="file-add" />
                  Nueva matricula
                </Menu.Item>
                <Menu.Item onClick={this.changeCurrentMainComponent} key="new">
                  <Icon type="file-add" />
                  Nueva Ficha
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="laptop" />
                    subnav 2
                  </span>
                }
              >
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />
                    subnav 3
                  </span>
                }
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 500
              }}
            >
              {mainComponents[this.state.currentComponent]}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
export default App;
