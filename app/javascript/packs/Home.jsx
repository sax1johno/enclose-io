import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import { scrollScreen } from 'rc-scroll-anim';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
import Content6 from './Content6';
import Content7 from './Content7';
import Content8 from './Content8';
import Point from './Point';

import './less/antMotion_style.less';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false
    };
  }

  componentDidMount() {
    // collide
    if ($('.ant-layout-sider-zero-width').length > 0) {
      $('#main').css('margin-left', '0');
      $('#sidebar').css('width', '36px');
    }
    // 点的位置居中
    const list = $('.templates-list-wrapper')[0];
    const listHeight = list.getBoundingClientRect().height;
    list.style.marginTop = ` -${listHeight / 2}px`;
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
  }

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  }

  render() {
    const children = [
      <Content0 id="content_0_0" key="content_0_0" isMode={this.state.isMode}/>,
      <Content1 id="content_2_0" key="content_2_0" isMode={this.state.isMode}/>,
      <Content2 id="content_3_0" key="content_3_0" isMode={this.state.isMode}/>,
      <Content3 id="content_4_0" key="content_4_0" isMode={this.state.isMode}/>,
      <Content4 id="content_9_0" key="content_9_0" isMode={this.state.isMode}/>,
      <Content5 id="content_5_0" key="content_5_0" isMode={this.state.isMode}/>,
      <Content6 id="content_7_0" key="content_7_0" isMode={this.state.isMode}/>,
      <Content7 id="content_8_0" key="content_8_0" isMode={this.state.isMode}/>,
      <Content8 id="content_6_0" key="content_6_0" isMode={this.state.isMode}/>,
    ];
    return (
      <div className="templates-wrapper">
        {children}
        <Point data={[
          "content_0_0",
          "content_2_0",
          "content_3_0",
          "content_4_0",
          "content_9_0",
          "content_5_0",
          "content_7_0",
          "content_8_0",
        ]}/>,
      </div>
    );
  }
}

ReactDOM.render(<LocaleProvider locale={enUS}><Home /></LocaleProvider>, document.getElementById('welcome_index'));
