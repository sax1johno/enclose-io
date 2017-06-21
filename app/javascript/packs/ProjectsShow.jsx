import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Layout, Menu, Breadcrumb, Icon, Button, Dropdown } from 'antd';
import { LocaleProvider } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import enUS from 'antd/lib/locale-provider/en_US';

const menu = (
  <Menu>
    <Menu.Item key="1">Details</Menu.Item>
    <Menu.Item key="2">Retry</Menu.Item>
    <Menu.Item key="3">Cancel</Menu.Item>
  </Menu>
);

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
    return (
        <time dateTime={ record.updated_at }>
          { enclose_io.time_words[record.updated_at_i] } ago
        </time>
    )
  }
}, {
  title: 'Status',
  key: 'phase',
  sorter: (a, b) => a.phase_i - b.phase_i,
  render: (text, record) => {
    return (
      <Dropdown overlay={menu} trigger={ ['click'] }>
        <Button
          style={{ marginLeft: 8 }}
          type={
            ('done' == record.phase) ? ( '' ) : (
              ('failed' == record.phase) ? ( 'danger' ) : (
                ('cancelled' == record.phase) ? ( 'dashed' ) : (
                  'primary'
                )
              )
            )
          }
        >
          <Icon
            type={
                   ('pending' == record.phase) ? ('clock-circle-o') : (
                     ('running' == record.phase) ? ('loading') : (
                       ('uploading' == record.phase) ? ('loading-3-quarters') : (
                         ('done' == record.phase) ? ('check-circle-o') : (
                           ('failed' == record.phase) ? ('exclamation-circle-o') : (
                             ('cancelled' == record.phase) ? ('minus-circle-o') : (
                               'question-circle-o'
                             )
                           )
                         )
                       )
                     )
                   )
                 }
          />&nbsp;
          <Icon type="down" />
        </Button>
      </Dropdown>
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
            <Table
              columns={columns}
              dataSource={ enclose_io.executables }
            />
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
