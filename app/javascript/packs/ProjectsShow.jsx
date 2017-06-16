import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { LocaleProvider } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import enUS from 'antd/lib/locale-provider/en_US';

class ProjectsShow extends React.Component {
  render() {
    return (
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item><a href="/">Enclose.IO</a></Breadcrumb.Item>
            <Breadcrumb.Item>{ enclose_io.project.name }</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }} id="main_content">
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Permalink<br />
          <a href={ enclose_io.project.permalink }>
            { enclose_io.project.permalink }
          </a>
        </Footer>
      </Layout>
    );
  }
}

ReactDOM.render(<LocaleProvider locale={enUS}><ProjectsShow /></LocaleProvider>, document.getElementById('projects_show'));
