import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Layout, Menu, Breadcrumb, Icon, Button, Dropdown, Tabs, Card } from 'antd';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
const { Header, Content, Footer, Sider } = Layout;
const TabPane = Tabs.TabPane;

const columns = [{
  title: 'Executable',
  key: 'fullname',
  sorter: (a, b) => a.fullname.localeCompare(b.fullname),
  render: (record) => {
    let icon = <Icon type={
            ('windows' == record.os) ? ( "windows-o" ) : (
              ('darwin' == record.os) ? ( "apple-o" ) : (
                ('linux' == record.os) ? ( "code-o" ) : (
                  'question-circle-o'
                )
              )
            )
          } />;
    if (record.url) {
      return (
        <a href={record.url}>
          {icon} {record.fullname}
        </a>
      )
    } else {
      return (
        <span>
          {icon} {record.fullname}
        </span>
      )
    }
  },
  filters: enclose_io.project.versions_filter,
  onFilter: (value, record) => {
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
    return ('' + enclose_io.time_words[record.updated_at_i] + ' ago');
  }
}, {
  title: 'Status',
  key: 'phase',
  sorter: (a, b) => a.phase_i - b.phase_i,
  render: (text, record) => {
    let menu = (
      <Menu>
        {
          (record.log) ? <Menu.Item key="1"><a href={record.log}>Logs</a></Menu.Item> : <Menu.Item key="1" disabled>Logs</Menu.Item>
        }
        <Menu.Item key="1" disabled={ !record.log }>Details</Menu.Item>
        <Menu.Item key="2" disabled>Retry</Menu.Item>
        <Menu.Item key="3" disabled>Cancel</Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu} trigger={ ['click'] }>
        <Button
          style={{ marginLeft: 8 }}
          type={
            ('done' == record.phase) ? ( '' ) : (
              ('failed' == record.phase) ? ( 'danger' ) : (
                ('cancelled' == record.phase) ? ( '' ) : (
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
    var latest_version;
    if (enclose_io.project.latest_version) {
      latest_version =
        <TabPane
          tab={
            <div>
              <Icon type="tag" />Latest: { enclose_io.project.latest_version }
            </div>
          }
          key="3"
          />;
    } else {
      latest_version = "";
    }
    
    return (
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item><a href="/">Enclose.IO</a></Breadcrumb.Item>
            <Breadcrumb.Item>{ enclose_io.project.name }</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }} id="main_content">
            <h2 style={{ margin: '0 0 8px 8px' }}>{ enclose_io.project.name }</h2>
            <div id="project_show_header">
              <Tabs defaultActiveKey="1">
                <TabPane
                  tab={
                    <div style={{paddingLeft: 8}}>
                      <Icon type="github" />Source: <a href={ enclose_io.project.url }>{ enclose_io.project.url }</a>
                    </div>
                  }
                  key="1"
                />
                <TabPane
                  tab={
                    <div>
                      <Icon type="info-circle" />Language: {
                        ('ruby' == enclose_io.project.language) ? ( "Ruby" ) : (
                          ('nodejs' == enclose_io.project.language) ? ( "Node.js" ) : (
                            ('cc' == enclose_io.project.language) ? ( "C++" ) : (
                              ('c' == enclose_io.project.language) ? ( "C" ) : (
                                '?'
                              )
                            )
                          )
                        )
                      }
                    </div>
                  }
                  key="2"
                />
                { latest_version }
              </Tabs>
            </div>
            <Table
              columns={columns}
              dataSource={ enclose_io.executables }
            />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <Icon type="link" /> Permalink<br />
          <a href={ enclose_io.project.permalink }>
            { enclose_io.project.permalink }
          </a>
        </Footer>
      </Layout>
    );
  }
}

ReactDOM.render(<LocaleProvider locale={enUS}><ProjectsShow /></LocaleProvider>, document.getElementById('projects_show'));
