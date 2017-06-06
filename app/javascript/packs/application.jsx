/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import 'antd/dist/antd.less';

import React from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Button, Radio, Icon, Input, Breadcrumb } from 'antd';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

const { Header, Content, Footer, Sider } = Layout;
const Search = Input.Search;

ReactDOM.render(
<LocaleProvider locale={enUS}>
  <Layout style={{ height: '100vh' }}>
  <Sider style={{ overflow: 'auto', paddingBottom: '48px' }}>
    <div className="logo"><a href="/">Enclose.IO</a></div>
    <div className="searchprj">
      <Search placeholder="Search Projects..."/>
    </div>
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
      <Menu.Item key="0">
        <span className="nav-text">Home</span>
      </Menu.Item>
      <Menu.Item>
        <span className="nav-text">Node.js Compiler</span>
      </Menu.Item>
      <Menu.Item>
        <span className="nav-text">Ruby Compiler</span>
      </Menu.Item>
      <Menu.Item>
        <span className="nav-text">Ruby</span>
      </Menu.Item>
      <Menu.Item>
        <span className="nav-text">Npm</span>
      </Menu.Item>
      <Menu.Item>
        <span className="nav-text">Yarn</span>
      </Menu.Item>
      <Menu.Item>
        <span className="nav-text">Fengdie</span>
      </Menu.Item>
      <Menu.Item>
        <span className="nav-text">Dora</span>
      </Menu.Item>
      <Menu.Item>
        <span className="nav-text">Homebrew</span>
      </Menu.Item>
      <Menu.Item>
        <span className="nav-text">CocoaPods</span>
      </Menu.Item>
      <Menu.Item>
        <span className="nav-text">Homeland</span>
      </Menu.Item>
    </Menu>
    <div className="ant-layout-sider-trigger addprj">
      <a href="https://github.com/pmq20/enclose-io/issues/new">
        <Button ghost icon="plus">Add Project</Button>
      </a>
    </div>
  </Sider>
</Layout>
</LocaleProvider>, document.getElementById('sidebar'));
