import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class Content extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'content6',
  };

  state = {
    show: 0,
  };

  onChange = (key) => {
    this.setState({ show: parseInt(key) })
  }

  getBlockChildren = (item, i) => {
    const tag = item.tag;
    const img = item.img;
    const text = item.text;
    return (
      <TabPane
        key={i}
        tab={(<span
          className={`${this.props.className}-tag`}
          id={`${this.props.id}-tagBlock${i}`}
        >
          <i><img src={tag.icon} width="100%" /></i>
          {tag.tag}
        </span>)}
      >
        <TweenOne.TweenOneGroup
          enter={{ y: 30, delay: 300, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          leave={null}
          component=""
        >
          {this.state.show === i && (
            <div key="content">
              <div
                className={`${this.props.className}-img`}
                id={`${this.props.id}-imgBlock${i}`}
              >
                {img}
              </div>
              <div
                className={`${this.props.className}-text`}
                id={`${this.props.id}-textBlock${i}`}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>)}
        </TweenOne.TweenOneGroup>
      </TabPane>
    );
  };

  render() {
    const props = Object.assign({}, this.props);
    delete props.isMode;
    const childrenData = [
      {
        tag: { tag: 'On Desktop', icon: 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg' },
        img: <img width="100%" src="https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png" />,
        text: `<h3>Protect Intellectual Properties</h3>
todo，todo，todo，todo。
<h3>Distribute to non-technical users</h3>
todo，todo，todo。todo，todo。
<h3>Merchandise softwares</h3>
todo、todo、todo，todo、todo、todo。`,
      },
      {
        tag: { tag: 'On Servers', icon: 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg' },
        img: <img width="100%" src="https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png" />,
        text: `<h3>Easier CI</h3>
todo，todo，todo，todo。
<h3>Easier Deployment</h3>
Just drop it! And it's deployed
<h3>Quicker Startup</h3>
todo、todo、todo，todo、todo、todo。`,
      },
      {
        tag: { tag: 'On Workstations', icon: 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg' },
        img: <img width="100%" src="https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png" />,
        text: `<h3>Less Pollution</h3>
todo，todo，todo，todo。
<h3>More Runtimes</h3>
todo，todo，todo。todo，todo。
<h3>Stay Up to Date</h3>
todo、todo、todo，todo、todo、todo。`,
      },
    ];
    const tabsChildren = childrenData.map(this.getBlockChildren);
    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={200}
            id={`${props.id}-title`}
          >
            Use Cases
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 100 }}
            component="p"
            key="p"
            reverseDelay={100}
            id={`${props.id}-content`}
          >
            Here are 3 scenarios where enclosed executables could help, among many others.
          </TweenOne>
          <TweenOne.TweenOneGroup
            key="tabs"
            enter={{ y: 30, opacity: 0, delay: 200, type: 'from' }}
            leave={{ y: 30, opacity: 0 }}
            className={`${props.className}-tabs`}
            id={`${props.id}-tabs`}
          >
            <Tabs key="tabs" onChange={this.onChange} activeKey={`${this.state.show}`}>
              {tabsChildren}
            </Tabs>
          </TweenOne.TweenOneGroup>
        </OverPack>
      </div>
    );
  }
}

export default Content;
