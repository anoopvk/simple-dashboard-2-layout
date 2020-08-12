import React, { Component } from 'react';
import './App.css';
import { Row, Col ,Layout, Menu, Breadcrumb } from 'antd';

const {  Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Sider theme="light"></Sider>
        <Layout>
          <Content className="bg">
            <Row>
              <Col span={24}>
              <div className="box1 box"></div>
              </Col>
            </Row>
            <Row>
              <Col span={9}>
              <div className="box2 box"></div>
              </Col>
              <Col span={15}>
              <div className="box2 box"></div>
              </Col>
            </Row>
            <Row className="mt-1">
              <Col span={8}>
              <div className="box3 box31 box"></div>
              </Col>
              <Col span={8}>
              <div className="box3 box32 box"></div>
              </Col>
              <Col span={8}>
              <div className="box3 box33 box"></div>
              </Col>
            </Row>
          </Content>
        </Layout>
        <Sider width="300" theme="light"></Sider>

      </Layout>
    );
  }
}

export default App;


