import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Layout, Menu, Breadcrumb, Icon } from 'antd';
import { LocaleProvider } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import enUS from 'antd/lib/locale-provider/en_US';

const columns = [{
  title: 'Executable',
  key: 'fullname',
  sorter: (a, b) => a.fullname.localeCompare(b.fullname),
  render: (record) => {
    if (record.url) {
      return (
        <a href={record.url}>{record.fullname}</a>
      )
    } else {
      return (
        record.fullname
      )
    }
  },
  filters: enclose_io.project.versions_filter,
  onFilter: (value, record) => {
    console.log((value));
    if(0 === value.indexOf('version.')) {
      return record.version === value.substr('version.'.length)
    } else if (0 === value.indexOf('os.')) {
      return record.os === value.substr('os.'.length)
    } else if (0 === value.indexOf('arch.')) {
      return record.arch === value.substr('arch.'.length)
    } else {
      return true;
    }
    record.fullname.indexOf(value) === 0
  }
}, {
  title: 'Updated at',
  key: 'updated_at',
  sorter: (a, b) => a.updated_at_i - b.updated_at_i,
  render: (text, record) => {
    setTimeout(()=>{$("time.timeago").timeago();}, 0);
    return (
        <time className="timeago" dateTime={ record.updated_at }>
          { record.updated_at }
        </time>
    )
  }
}];

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
            <Table columns={columns} dataSource={ enclose_io.project.executables } />
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
